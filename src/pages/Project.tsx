import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import projectTemp from "../assets/images/project-temp.png";
const Project = () => {
  return (
    <div>
      Project
      <img src={projectTemp} alt="project-temp" />
      <BottomNavbar />
    </div>
  );
};

export default Project;
