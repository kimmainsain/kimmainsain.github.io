import React from "react";
import About from "./pages/About";
import History from "./pages/History";
import Project from "./pages/Project";
import Stack from "./pages/Stack";
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
    path: "/about",
    element: <About />,
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
    path: "/stack",
    element: <Stack />,
  },
];

export default routes;
