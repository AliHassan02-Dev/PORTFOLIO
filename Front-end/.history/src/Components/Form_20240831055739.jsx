import React from "react";

const Form = ({btnTxt, Hdg}) => {
  return (
    <div className="formWrapper">
      <div className="formContainer">
        <h2>{Hdg}</h2>

        <input type="text" placeholder="email" className="emailField" />
        <input type="text" placeholder="password" className="passField" />

        <button className="formBtn">{btnTxt}</button>
      </div>
    </div>
  );
};

export default Form;
