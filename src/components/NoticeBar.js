import React from "react";
import "./NoticeBar.css";

const NoticeBar = () => {
  return (
    <div className="notice-bar">
      <marquee behavior="scroll" direction="left">
        📢 Welcome to The Student Spot! | 🚀 Stay tuned for upcoming events! | 🎓 Your journey to success starts here!
      </marquee>
    </div>
  );
};

export default NoticeBar;
