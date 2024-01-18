import React, { useState } from "react";
import "./Login.css"; // Import your CSS file for styling
import image from "../components/top-engineering-college-logo.gif"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState("login");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", username, password);
    setActiveButton("login");
  };

  const handleSignUp = () => {
    // Add your signup logic here
    console.log("Signing up with:", username, password);
    setActiveButton("signup");
  };

  return (
    <div className="login-container">
        
        <div className="login-header">
        <img className="logo-image" src={image} />
           <h1>TIME KIT</h1></div>
       
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button
            className={activeButton === "login" ? "active" : ""}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className={activeButton === "signup" ? "active" : ""}
            onClick={handleSignUp}
          >
            <a href="/signup">Sign Up</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
