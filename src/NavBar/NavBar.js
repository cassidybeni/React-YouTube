import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="Nav">
        <Link to="/">
          <img
            id="homeSVG"
            src="https://freesvg.org/img/claudita-home-icon.png"
            alt="home"
          ></img>
          Home
        </Link>
        <Link to="/about">
          <img
            id="aboutSVG"
            src="https://svgsilh.com/svg/481829.svg"
            alt="about"
          ></img>{" "}
          About
        </Link>
      </nav>
    {/* typically, icons like this link to the home page as well! I'd recommend using a Link here. */}
      <img
        className="Icon"
        src="https://cdn1.iconfinder.com/data/icons/youtuber/256/video-logo-play-icon-512.png"
        alt="icon"
      ></img>
    </div>
  );
}

export default NavBar;
