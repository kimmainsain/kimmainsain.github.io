import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/bottomNav.scss";
import logo from "../assets/images/mainlogo.png";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav role="navigation" className="nav-menu">
      <div
        onClick={() => handleNavigation("/about")}
        className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
      >
        ABOUT
      </div>
      <div
        onClick={() => handleNavigation("/project")}
        className={`nav-link ${
          location.pathname === "/project" ? "active" : ""
        }`}
      >
        PROJECT
      </div>
      <div
        onClick={() => handleNavigation("/")}
        className={`nav-home is--brand ${
          location.pathname === "/" ? "active" : ""
        }`}
        aria-label="home"
      >
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div
        onClick={() => handleNavigation("/stack")}
        className={`nav-link ${location.pathname === "/stack" ? "active" : ""}`}
      >
        TECH STACK
      </div>
      <div
        onClick={() => handleNavigation("/history")}
        className={`nav-link ${
          location.pathname === "/history" ? "active" : ""
        }`}
      >
        HISTORY
      </div>
    </nav>
  );
};

export default BottomNavbar;
