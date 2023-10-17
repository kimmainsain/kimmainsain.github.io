import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import "../styles/aboutLayout.scss";
import profile from "../assets/images/profileImage.jpg";

const Contact = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="who-i-am">THIS IS WHO I AM</div>
        <div className="about-header">
          <div className="about-profile-img">
            <img src={profile} alt="Profile" />
          </div>
          <div className="about-profile-contact">
            <div className="contact-title">Contact & Channels</div>
            <div className="contact-item">Email | devsain0621@gmail.com</div>
            <div className="contact-item">Blog | velog.io/@kimmainsain</div>
            <div className="contact-item">Github | github.com/kimmainsain</div>
            <div className="contact-item">
              Portfolio | kimmainsain.github.io (진행중)
            </div>
            <div className="contact-item">1999.06.21</div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Contact;
