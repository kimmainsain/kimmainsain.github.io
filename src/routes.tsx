import React from "react";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Project from "./pages/Project";
import Strength from "./pages/Strength";
import UserInfo from "./pages/UserInfo";
import App from "./App";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/UserInfo",
    element: <UserInfo />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/History",
    element: <History />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/Strength",
    element: <Strength />,
  },
];

export default routes;
