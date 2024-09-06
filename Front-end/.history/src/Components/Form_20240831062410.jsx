import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ btnTxt, Hdg, apiCall }) => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (apiCall === "Login") {
      try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admin),
        });

        console.log("from DB", response);

        const responseData = await response.json();
        console.log("responseData", responseData);

        if (!response.ok) {
          alert("Invalid Credentials");
        }
        if (response.ok) {
          alert("Login successful");
        }
      } catch (error) {
        console.error(error.msg);
      }
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
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={admin.password}
          onChange={handleEvent}
          className="passField"
        />

        <button className="formBtn" onClick={handleSubmit}>
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default Form;
