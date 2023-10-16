import React from "react";
import "../styles/bottomNav.scss";

const BottomNavbar = () => {
  return (
    <nav role="navigation" className="nav-menu w-nav-menu">
      <a href="/Contact" className="nav-link w-nav-link">
        CONTACT
      </a>
      <a href="/Project" className="nav-link w-nav-link w--current">
        PROJECT
      </a>
      <a href="/" className="nav-link is--brand w-nav-brand" aria-label="home">
        <img
          // src={logoBlack}
          alt="'Milli' written in a graffiti-style script"
          className="black"
        />
        {/* <img src={logoWhite} alt="" className="white" /> */}
      </a>
      <a href="/Strength" className="nav-link w-nav-link">
        STRENGTH
      </a>
      <a href="/History" className="nav-link w-nav-link">
        HISTORY
      </a>
    </nav>
  );
};

export default BottomNavbar;
