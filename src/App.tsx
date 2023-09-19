import React from "react";
import Contact from "./components/Contact";
import History from "./components/History";
import Project from "./components/Project";
import Strength from "./components/Strength";
import UserInfo from "./components/UserInfo";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <UserInfo />
      <Contact />
      <Strength />
      <History />
      <Project />
    </div>
  );
};

export default App;
