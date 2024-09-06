import React, { useState } from "react";

const Form = ({ btnTxt, Hdg }) => {
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

  return (
    <div className="formWrapper">
      <div className="formContainer">
        <h2>{Hdg}</h2>

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEvent}
          className="emailField"
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={handleEvent}
          className="passField"
        />

        <button className="formBtn">{btnTxt}</button>
      </div>
    </div>
  );
};

export default Form;
