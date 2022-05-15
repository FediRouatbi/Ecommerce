import React from "react";
import "./about.scss";
import { FaGithub, FaFacebook } from "react-icons/fa";
const About = () => {
  return (
    <div className="container">
      <div className="about__text">
        This is a Ecommerce Application built with React for the purpose of
        displaying my front end knowledge
      </div>
      <div className="about__icons">
        <a href="https://github.com/FediRouatbi" target="_blank" rel="noreferrer">
          <FaGithub size={40} className="about__icons--icon" />
        </a>
        <a href="https://www.facebook.com/xCHIVASx/" target="_blank" rel="noreferrer">
          <FaFacebook size={40} className="about__icons--icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
