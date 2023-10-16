import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/mainLayout.scss";
import homelogo from "./assets/images/homelogo.png";

const App = () => {
  const [hoveredBox, setHoveredBox] = useState(null as string | null);
  const navigate = useNavigate();

  return (
    <div className="container" data-hovered={hoveredBox}>
      <div className="header marquee">위</div>
      <div className="footer marquee bottom">아래</div>
      <div className="main-wrapper">
        <div
          className={`contact inner-box ${
            hoveredBox === "contact" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("contact")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/contact")}
        >
          CONTACT
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
          className={`strength inner-box ${
            hoveredBox === "strength" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("strength")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/strength")}
        >
          STRENGTH
        </div>
        <div
          className={`user-info inner-box ${
            hoveredBox === "user-info" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("user-info")}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => navigate("/userInfo")}
        >
          <img src={homelogo} alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default App;
