import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [currState,setCurrState] = useState('Login')
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>{currState}</h1>
        <div className="loginsignup-fields">
          {currState === 'Login'?<></>:<input type="text" placeholder='Your Name'/>}
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        {currState==='Login'
        ? <p className="loginsignup-login">Create a new account?<span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
        : <p className="loginsignup-login">Already have an account?<span onClick={()=>setCurrState('Login')}>Login</span></p>
      }
       
       
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
