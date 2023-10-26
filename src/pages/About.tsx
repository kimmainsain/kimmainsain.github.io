import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/aboutLayout.scss";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="about-page">
      <Header mainheader="About ." subheader="개발자 김민섭입니다." />
      <BottomNavbar />
    </div>
  );
};

export default About;
