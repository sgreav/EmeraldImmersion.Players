import React from 'react'
import BasicLogin from 'components/login/basicLogin'
import SocialLogin from 'components/login/socialLogin'

export default class Login extends React.Component {
  render(){
    return (
    <div>
      <h1 className='title'>Emerald Immersion - &lt;3 Jazzy</h1>
      <div className='loginContainer'>
        <div className='subLoginContainer'>
          <BasicLogin/>
        </div>
        <div className='subLoginContainer'>
          <span> Login using... </span>
          <hr className='smallHr'/>
          <SocialLogin/>
        </div>
      </div>
    </div>
    )
  }
}
