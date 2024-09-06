import React from "react";

const Form = () => {
  return (
    <div className="formWrapper">
      <div className="formContainer">
        <h2>Login</h2>

        <input type="text" placeholder="email" className="emailField" />
        <input type="text" placeholder="password" className="passField" />

        <button className="formBtn">Login</button>
      </div>
    </div>
  );
};

export default Form;
