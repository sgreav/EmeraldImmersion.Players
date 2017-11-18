import request from 'request'
const crypto = require('crypto')

export function tryRegister(username, password) {
  const salt = crypto.randomBytes(32).toString('hex')
  let hashedPassword = ''
  crypto.pbkdf2(username, salt, 100000, 256, 'sha512', (err, derivedKey) => {
  if (err) throw err;
    hashedPassword = derivedKey.toString('hex')
    console.log('we derived a key ' + hashedPassword);  // '3745e48...08d59ae'
    postRegistrationRequest(username, hashedPassword, salt)
  });

  if(hashedPassword === ''){
    return
  }
}

function postRegistrationRequest(username, hashedPassword, salt){
  request.post({
    url:'http://localhost:8001',
    form: { method: 'createLogin', username: username, hashedPassword: hashedPassword, salt: salt }
  }, function(e,r,b) {})
}
