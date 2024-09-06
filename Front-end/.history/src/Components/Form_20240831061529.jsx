import React, { useState } from "react";

const Form = ({ btnTxt, Hdg, apiCall }) => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (apiCall === "Login") {
      alert("LOGIN");
    } else if (apiCall === "Register") {
      alert("REGISTER");
    }
  };

  return (
    <div className="formWrapper">
      <div className="formContainer">
        <h2>{Hdg}</h2>

        <input
          type="text"
          placeholder="email"
          name="email"
          value={admin.email}
          onChange={handleEvent}
          className="emailField"
          required
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={admin.password}
          onChange={handleEvent}
          className="passField"
          required
        />

        <button className="formBtn" onClick={handleSubmit}>
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default Form;
