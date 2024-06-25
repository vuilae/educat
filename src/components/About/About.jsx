import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about" className="about-img" />
        <img src={play_icon} alt="about" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About university</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in
          magni corporis officiis sapiente obcaecati est incidunt distinctio
          deserunt praesentium!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in
          magni corporis officiis sapiente obcaecati est incidunt distinctio
          deserunt praesentium!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in
          magni corporis officiis sapiente obcaecati est incidunt distinctio
          deserunt praesentium!
        </p>
      </div>
    </div>
  );
};

export default About;
