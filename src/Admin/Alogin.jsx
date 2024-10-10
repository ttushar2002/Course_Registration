import React from 'react'
import "./Alogin.css"
const Alogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Alogin