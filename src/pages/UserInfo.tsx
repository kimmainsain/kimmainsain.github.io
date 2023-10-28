import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";

const UserInfo = () => {
  return (
    <div>
      <Header mainheader="About" subheader="개발자 김민섭입니다." />
      <BottomNavbar />
    </div>
  );
};

export default UserInfo;
