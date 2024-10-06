import React from 'react'
import "./Alogin.css"
const Alogin = () => {
  return (
    <div className="login-main">
      <div className="login-container">
        <h2>Admin Login</h2>

        {/* Login Form */}
        <form action="">
          <div className="login-form">
            <div className="login-input">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter your username" />
            </div>
            
            <div className="login-input">
              <label>Password</label>
              <input type="password" name="" id="" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Alogin