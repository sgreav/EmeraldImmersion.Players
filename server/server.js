var http = require('http')
var fs = require('fs')
var url = require('url')
var qs = require('querystring')

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'emeraldplayers',
  multipleStatements: true
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


http.createServer(function(request, response){
  if(request.method === 'POST'){
    var body = '';
    request.on('data', function (data) {
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            const username = post['username']
            const password = post['hashedPassword']
            const salt = post['salt']
            console.log(salt)
            let result = false
            connection.query(`CALL createBasicLogin(?, ?, ?, @succeeded); SELECT @succeeded;`, [username, salt, password],function(err, rows){
              if (err) throw err;

              const succeeded = rows[1][0]['@succeeded']

              if(succeeded === 0){
                console.log("Whoops, that username was already registered")
                response.statusCode = 400
                response.write('That username was already taken, please try again')
              }
              else {
                console.log("You have been registered successfully")
                response.statusCode = 200
                response.write('You have succesfully registered for EmeraldImmersion')
              }
              response.end()
            });

        });
  }
  console.log('request received')
}).listen(8001)

console.log('server listening on 8001')
