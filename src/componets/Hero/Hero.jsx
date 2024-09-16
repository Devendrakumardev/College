import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptas eaque nulla itaque tempore voluptatum beatae perferendis eum
          autem harum.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
