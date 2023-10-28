import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/projectLayout.scss";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";

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

const slideData = ["Slide 1 Content", "Slide 2 Content", "Slide 3 Content"];

const Project = () => {
  return (
    <div className="project-page">
      <Header mainheader="Project ." subheader="FE / AOS" />
      <div className="project-container">
        <Slider {...sliderSettings}>
          {slideData.map((slide, index) => (
            <div key={index} className="slide-item">
              {slide}
            </div>
          ))}
        </Slider>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Project;
