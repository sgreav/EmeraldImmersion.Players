import React from 'react'

export default class BasicLogin extends React.Component {
  render(){
    return (
      <div>
        <div className='bottomMarginSmall'><span>Email address</span></div>
        <div className='bottomMarginBig'><input type='text' className='basicLoginInput form-control' placeholder='Enter email'/></div>
        <div className='bottomMarginSmall'><span>Password</span></div>
        <div className='bottomMarginBig'><input type='text' className='basicLoginInput form-control'  placeholder='Password'/></div>
        <div className='bottomMarginBig'><input type='checkbox'/><span>Remember me</span></div>

        <div className='btn btn-primary wideBoi noRightRadius'>Logon</div>
        <div className='btn btn-secondary wideBoi noLeftRadius'>Register</div>
      </div>
    )
  }
}
