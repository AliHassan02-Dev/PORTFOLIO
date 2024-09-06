import React from "react";

const Form = () => {
  return (
    <div className="formWrapper">
      <div className="formWrapper">
        <h2>Login</h2>

        <input type="text" placeholder="email" className="emailField" />
        <input type="text" placeholder="password" className="passField" />

        <button className="formBtn"></button>
      </div>
    </div>
  );
};

export default Form;
