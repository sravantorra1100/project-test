import React from 'react'
import '../Styles/Login.css';
const Login = () => {
  return (
    <div className='cont'>
    <h1>Login</h1>
     <div>Username:<input type="text" name="BUsername"/></div>
     <div>Password:<input type="password" name="BPassword"/></div>
     <button className="btn">Login</button>
    </div>
   
  )
}

export default Login