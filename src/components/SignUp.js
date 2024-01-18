// SignUp.js

import React, { useState } from "react";
import "./signUp.css"; // Import your CSS file for styling

const SignUp = ({ active, onClick }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setRegistered] = useState(false);

  function handleSignUp() {
    // Placeholder signup logic
    if (newPassword !== confirmPassword) {
      console.log("Passwords do not match. Please try again.");
      return;
    }

    // Assuming you have a registration API endpoint
    // Replace the following with actual API calls or database interactions
    console.log("Registering...");
    console.log("New Username:", newUsername);
    console.log("New Password:", newPassword);

    // Successful registration
    setRegistered(true);
    console.log("Registration successful!");
  }

  return (
    <div className="signup-container">
      {isRegistered ? (
        <div>
          <p>Registration successful! Welcome, {newUsername}!</p>
        </div>
      ) : (
        <div>
          <div>
            <label htmlFor="newUsername">New Username:</label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className={`signup-button ${active ? "active" : ""}`}
              onClick={() => {
                handleSignUp();
                onClick(); // Trigger the parent component's click handler
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
