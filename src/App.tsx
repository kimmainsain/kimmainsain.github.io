import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/mainLayout.scss";
// import homelogo from "./assets/images/homelogo.png";
import "./assets/fonts/fonts.scss";

const App = () => {
  const [hoveredBox, setHoveredBox] = useState(null as string | null);
  const navigate = useNavigate();

  return (
    <div className="container" data-hovered={hoveredBox}>
      <div className="header marquee"></div>
      <div className="footer marquee bottom"></div>
      <div className="main-wrapper">
        <div
          className={`about inner-box ${
            hoveredBox === "about" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("about")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/about")}
        >
          ABOUT
        </div>
        <div
          className={`history inner-box ${
            hoveredBox === "history" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("history")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/history")}
        >
          HISTORY
        </div>
        <div
          className={`project inner-box ${
            hoveredBox === "project" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("project")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/project")}
        >
          PROJECT
        </div>
        <div
          className={`stack inner-box ${
            hoveredBox === "stack" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("stack")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/stack")}
        >
          TECH STACK
        </div>
        <div
          className={`user-info inner-box ${
            hoveredBox === "user-info" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("user-info")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/userInfo")}
        >
          All
        </div>
      </div>
    </div>
  );
};

export default App;
