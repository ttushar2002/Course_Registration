import React from "react";
import "./Slogin.css";

const Slogin = () => {
  return (
    <>
      <div className="login-container">
        {/* Left section with image and description */}
        <div className="login-left">
          <img
            src="https://plus.unsplash.com/premium_photo-1666299720600-a432232bdf2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww://via.placeholder.com/30https://plus.unsplash.com/premium_photo-1661720027875-4bb0a2c90f30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D0"
            alt="Exam Mastery"
            className="login-image"
          />
          <h2>Courses For Your Academic Success</h2>
          <p>
            Unleash Your Academic Success with Our Courses Excellence Platform
          </p>
        </div>

        {/* Right section with form */}
        <div className="login-right">
          <div className="login-header">
            <h1>Student Login</h1>
          </div>
          <form className="login-form">
            <label htmlFor="email">Username</label>
            <input type="text" id="email" placeholder="john@gmail.com" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="*********" />
            <a href="#" className="forgot-password">
              Forgot password?
            </a>

            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>

          <p className="signup-text">
            Are you new? <a href="#">Create an Account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Slogin;
