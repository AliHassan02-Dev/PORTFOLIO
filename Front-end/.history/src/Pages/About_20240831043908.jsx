import React from "react";

const About = () => {
  return (
    <div className="aboutContainer containers">
      <div className="left">
        <h2 id="aboutAni">ABOUT ME</h2>
        <p id="aboutPara">
          <span>Introduction:</span> <br /> My name is Ali Hassan Siddiqui. I am
          fresher with a skills of web development and designing. I did a web
          designing course of 6 Months. Below are some the projects I created as
          a pratice.
        </p>
        <div className="imageBox"></div>
      </div>
      <div className="right">
        <div className="circleImg"></div>
        <h2>Web Developer</h2>
        <p id="aboutPara">
          Enthusiastic and dedicated web developer with a solid understanding of
          modern web technologies and design principles. Proficient in building
          responsive, user-friendly websites and eager to contribute innovative
          solutions to a collaborative team. Committed to continuous learning
          and growth in a fast-paced development environment.
        </p>
      </div>
    </div>
  );
};

export default About;
