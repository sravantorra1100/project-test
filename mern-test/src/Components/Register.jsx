import React from 'react'

const Register = () => {
  return (
    <div className='cont'>
    <h1>Register</h1>
     <div>Name:<input type="text" name="Bname"/></div>
     <div>SurName:<input type="text" name="Bsurname"/></div>
     <div>Email:<input type="email" name="Bemail"/></div>
     <div>Password:<input type="password" name="Bpassword"/></div>
     <div><input type="submit" value="Submit" className='btn'/><input type="reset" value="Clear" className='btn'/></div>
    </div>
  )
}

export default Register