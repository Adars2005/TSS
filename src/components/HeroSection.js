import React from "react";
import "./HeroSection.css";
import logo from "../assets/logo.jpg"; // Ensure the logo is in the assets folder

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={logo} alt="The Student Spot" className="logo" />
      <h1>
        👋 <span className="bold-text">Welcome to</span>{" "}
        <span className="highlight">The Student Spot</span>
      </h1>
      
        <span className="bold-text">Unlock career opportunities, connect with professionals, and access
        exclusive resources to shape you .Let's grow together!</span>
    
      <div className="button-container">
        <button className="join-btn">
          <a href="https://bento.me/thestudentspot" target="_blank" rel="noopener noreferrer">
            Join
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
