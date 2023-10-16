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
    path: "/userInfo",
    element: <UserInfo />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/strength",
    element: <Strength />,
  },
];

export default routes;
