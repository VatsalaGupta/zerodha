import React, { useState } from "react";
function Signup() {
  const handleClick = () => {
    window.location.href = " http://localhost:3001/dashboard";
  };
  return (
    <>
      <LoginForm />
    </>
  );
}

export default Signup;

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Check if username (email) is provided and valid
    if (!formData.username.trim()) {
      validationErrors.username = "Username (email) is required.";
    } else if (!emailRegex.test(formData.username)) {
      validationErrors.username = "Please enter a valid email address.";
    }

    // Check if password is provided
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      window.location.href = " http://localhost:3001/dashboard";
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2 style={{ color: "#387ed1" }}>Signup to Zerodha</h2>
      <form onSubmit={handleSubmit}>
        {/* Username (Email) Field */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Username (Email):
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.username && (
            <p style={{ color: "red", margin: "5px 0 0" }}>{errors.username}</p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "5px 0 0" }}>{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 20px",
            cursor: "pointer",
            background: "#387ed1",
            color: "white",
            borderWidth: 0,
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}
