import React from "react";
import "./styles/mainLayout.scss";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div>위</div>
      </div>

      <div className="footer">
        <div>아래</div>
      </div>

      <div className="right-sidebar sidebar">
        <div>오른쪽</div>
      </div>

      <div className="left-sidebar sidebar">
        <div>왼쪽</div>
      </div>

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
