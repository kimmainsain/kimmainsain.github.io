import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/aboutLayout.scss";
import Header from "../components/Header";
import profilePhoto from "../assets/images/ssunguri.png";
import "../assets/fonts/fonts.scss";
import CardBox from "../components/CardBox";

const About = () => {
  return (
    <div className="about-page">
      <Header mainheader="About" subheader="개발자 김민섭입니다." />
      <CardBox
        img={profilePhoto}
        head="나를 표현하는 한줄"
        body="두세줄정도 적을 공간 깃허브 주소 + 블로그 링크"
        view={true}
      />
      <div className="about-keywords">
        <div className="keyword-item">
          <div className="keyword-head">#키워드 A</div>
          <div className="keyword-body">
            질문, 토론 등 소통을 활성화해 참여도를 높입니다.
          </div>
          <img src={profilePhoto} alt="profile" className="keyword-img" />
        </div>
        <div className="keyword-item">
          <div className="keyword-head">#키워드 B</div>
          <div className="keyword-body">
            질문, 토론 등 소통을 활성화해 참여도를 높입니다.
          </div>
          <img src={profilePhoto} alt="profile" className="keyword-img" />
        </div>
        <div className="keyword-item">
          <div className="keyword-head">#키워드 C</div>
          <div className="keyword-body">
            질문, 토론 등 소통을 활성화해 참여도를 높입니다.
          </div>
          <img src={profilePhoto} alt="profile" className="keyword-img" />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default About;
