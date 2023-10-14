import React from "react";
import "./styles/mainLayout.scss";

const App = () => {
  return (
    <div className="container">
      <div className="header marquee">위</div>

      <div className="footer marquee bottom">아래</div>

      <div className="right-sidebar marquee right">오른</div>

      <div className="left-sidebar marquee left">왼</div>

      <div>
        <div className="contact inner-box">Contact</div>
        <div className="history inner-box">History</div>
        <div className="project inner-box">Project</div>
        <div className="strength inner-box">Strength</div>
        <div className="user-info inner-box">UserInfo</div>
      </div>
    </div>
  );
};

export default App;
