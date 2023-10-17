import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bottomNav.scss";
import logo from "../assets/images/mainlogo.png";

const BottomNavbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav role="navigation" className="nav-menu">
      <div onClick={() => handleNavigation("/about")} className="nav-link">
        ABOUT
      </div>
      <div onClick={() => handleNavigation("/project")} className="nav-link">
        PROJECT
      </div>
      <div
        onClick={() => handleNavigation("/")}
        className="nav-home is--brand"
        aria-label="home"
      >
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div onClick={() => handleNavigation("/strength")} className="nav-link">
        STRENGTH
      </div>
      <div onClick={() => handleNavigation("/history")} className="nav-link">
        HISTORY
      </div>
    </nav>
  );
};

export default BottomNavbar;
