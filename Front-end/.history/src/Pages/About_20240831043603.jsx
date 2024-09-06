import React from "react";

const About = () => {
  return (
    <div className="aboutContainer containers">
      <div className="left">
        <h2 id="aboutAni">ABOUT ME</h2>
        <p id="aboutPara">
          <span>Introduction</span> <br /> My name is Ali Hassan Siddiqui. I am
          fresher with a skills of web development and designing. I did a web
          designing course of 6 Months. Below are some the projects I created as
          a pratice.
        </p>
        <div className="imageBox"></div>
      </div>
      <div className="right">
        <div className="circleImg"></div>
        <h2>Web Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod, neque in faucibus pellentesque, augue tellus laoreet massa,
          vel pharetra lectus tortor vel turpis. Maecenas pharetra purus dolor,
          interdum aliquam sapien varius non. Nam placerat faucibus augue, sit
          amet efficitur nisi maximus ut. Nunc sit amet consectetur ante, sit
          amet vehicula velit. Vestibulum tempor cursus urna, in suscipit ipsum
          gravida ac. Aenean eu convallis leo.
        </p>
      </div>
    </div>
  );
};

export default About;
