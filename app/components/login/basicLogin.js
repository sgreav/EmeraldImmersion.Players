import React from 'react'
import { tryRegister } from 'database/registration'
export default class BasicLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.updatePassword = this.updatePassword.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
  }
  render(){
    return (
      <div>
        <div className='bottomMarginSmall'><span>Email address</span></div>
        <div className='bottomMarginBig'><input type='text' id='usernameInput' className='basicLoginInput form-control' placeholder='Enter username' onChange={this.updateUsername}/></div>
        <div className='bottomMarginSmall'><span>Password</span></div>
        <div className='bottomMarginBig'><input id='passwordInput' type='password' className='basicLoginInput form-control' placeholder='Password' onChange={this.updatePassword}/></div>
        <div className='bottomMarginBig'><input type='checkbox'/><span>Remember me</span></div>

        <div className='btn btn-primary wideBoi noRightRadius greenBackground'>Logon</div>
        <div className='btn btn-secondary wideBoi noLeftRadius greenBorder' onClick={() => tryRegister(this.state.username, this.state.password)}>Register</div>
      </div>
    )
  }

  updatePassword(evt){
    this.setState({password: document.getElementById('passwordInput').value})
  }
  updateUsername(evt){
    this.setState({username: document.getElementById('usernameInput').value})
  }
}
