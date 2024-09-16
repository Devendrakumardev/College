import React from "react";
import "./Aboute.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const Aboute = () => {
  return (
    <div className="avoute">
      <div className="aboute-left">
        <img src={about_img} alt="" className="aboute-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>

      <div className="about-right">
        <h3>ABOUTE UNIVERSITY </h3>
              <h2>Nurturing Tomorrow's Leader Today</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis suscipit laboriosam cumque facere magni esse dolores, aliquam facilis excepturi quasi! Nostrum iure natus doloremque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident esse cum alias rerum maxime sit, pariatur culpa nulla dolorem officia facilis voluptate, numquam quam? Vitae laudantium commodi alias mollitia.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus accusantium quod laudantium cumque quis libero exercitationem magni autem. Fuga, amet! Alias tenetur dolorum voluptatibus.
              </p>
      </div>
    </div>
  );
};

export default Aboute;
