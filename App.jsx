import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("✅ Strong Password");
    } else {
      setErrorMessage("❌ Not a Strong Password");
    }
  };

  return (
    <div className="container">
      <h2>Checking Password Strength in ReactJS</h2>

      <div className="input-box">
        <label>Enter Password:</label>
        <input
          type="password"
          onChange={(e) => validate(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      {errorMessage && (
        <p
          className={`message ${
            errorMessage.includes("Strong") ? "strong" : "weak"
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default App;
