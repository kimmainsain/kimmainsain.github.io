import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/aboutLayout.scss";
import Header from "../components/Header";
import profilePhoto from "../assets/images/ssunguri.png";

const About = () => {
  return (
    <div className="about-page">
      <Header mainheader="About ." subheader="개발자 김민섭입니다." />
      <div className="about-card-box">
        <div className="about-card-contents">
          {/* <div className="about-card-img">이미지</div> */}
          <img src={profilePhoto} alt="profile" className="about-card-img" />
          <div className="about-card-explain">
            <div className="about-card-explain-head">나를 표현하는 한줄</div>
            <div className="about-card-explain-body">
              두세줄정도 적을 공간 + 깃허브 주소 + 블로그 링크
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default About;
