import React, { useState } from "react";
import "./styles/mainLayout.scss";

const App = () => {
  const [hoveredBox, setHoveredBox] = useState(null as string | null);

  return (
    <div className="container">
      <div className="header marquee">위</div>
      <div className="footer marquee bottom">아래</div>
      <div className="main-wrapper">
        <div
          className={`contact inner-box ${
            hoveredBox === "contact" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("contact")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Contact
        </div>
        <div
          className={`history inner-box ${
            hoveredBox === "history" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("history")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          History
        </div>
        <div
          className={`project inner-box ${
            hoveredBox === "project" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("project")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Project
        </div>
        <div
          className={`strength inner-box ${
            hoveredBox === "strength" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("strength")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          Strength
        </div>
        <div
          className={`user-info inner-box ${
            hoveredBox === "user-info" ? "expanded" : ""
          }`}
          onMouseEnter={() => setHoveredBox("user-info")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          UserInfo
        </div>
      </div>
    </div>
  );
};

export default App;
