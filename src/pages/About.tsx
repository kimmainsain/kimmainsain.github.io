import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/aboutLayout.scss";
import Thisiswhoiam from "../assets/images/ts/Thisiswhoiam";
import AboutHeader from "../assets/images/about-header.png";
// import Abouttravel from "../assets/images/ts/Abouttravel";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Thisiswhoiam />
        <div className="about-intro">
          <img src={AboutHeader} alt="about-temp" />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default About;
