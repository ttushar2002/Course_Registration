import React, { useState } from "react";
import "./Slogin.css";

const SRegister = () => {
  // Declare states for form fields and errors
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  // Validate form on submit
  const validate = () => {
    const validationErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Email validation: required and must be a valid format
    if (!formValues.email) {
      validationErrors.email = "Email is required";
    } else if (!formValues.email.match(emailPattern)) {
      validationErrors.email = "Please enter a valid email address";
    }

    // Password validation: required and minimum 8 characters
    if (!formValues.password) {
      validationErrors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    // Confirm Password validation: must match the password
    if (formValues.password !== formValues.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // If there are no errors, log form submission or proceed further
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formValues);
    }
  };

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
            <h1>Student Registration</h1>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="*********"
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="*********"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <button type="submit" className="signin-btn">
              Sign up
            </button>
          </form>

          <p className="signup-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SRegister;
