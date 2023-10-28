import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/projectLayout.scss";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import CardBox from "../components/CardBox";
import profilePhoto from "../assets/images/ssunguri.png";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const slideData = [
  { text: "Slide 1 Content", img: profilePhoto },
  { text: "Slide 2 Content", img: profilePhoto },
  { text: "Slide 3 Content", img: profilePhoto },
];

const Project = () => {
  return (
    <div className="project-page">
      <Header mainheader="Project ." subheader="FE / AOS" />
      <div className="project-container">
        <Slider {...sliderSettings}>
          {slideData.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              {slide.text}
            </div>
          ))}
        </Slider>
      </div>
      <CardBox
        img={profilePhoto}
        head="프로젝트 이름"
        body="프로젝트 설명"
        view={true}
      />
      <CardBox
        img={profilePhoto}
        head="프로젝트 이름"
        body="프로젝트 설명"
        view={false}
      />

      <BottomNavbar />
    </div>
  );
};

export default Project;
