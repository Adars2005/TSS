import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import NoticeBar from "./NoticeBar"; // Import the scrolling notice bar

const Navbar = () => {
  return (
    <>
      <NoticeBar /> {/* Notice bar above the navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="The Student Spot" />
          <span className="site-name">The Student Spot</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li><Link to="/login">🔑 Login</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
