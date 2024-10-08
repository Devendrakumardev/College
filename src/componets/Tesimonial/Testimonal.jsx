import React, { useRef } from "react";
import "./Testimonal.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonal = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img
        src={back_icon}
        className="back-btn"
        alt=""
        onClick={slideBackword}
      />
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Chooging the Pursue my degree at Edusity was one of the best
                decisons I,ve ever made the supportive community starte of the
                art facilities , adn commitment to acdmic excellence have a
                truly exceeded my my expectation
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Chooging the Pursue my degree at Edusity was one of the best
                decisons I,ve ever made the supportive community starte of the
                art facilities , adn commitment to acdmic excellence have a
                truly exceeded my my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Chooging the Pursue my degree at Edusity was one of the best
                decisons I,ve ever made the supportive community starte of the
                art facilities , adn commitment to acdmic excellence have a
                truly exceeded my my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Chooging the Pursue my degree at Edusity was one of the best
                decisons I,ve ever made the supportive community starte of the
                art facilities , adn commitment to acdmic excellence have a
                truly exceeded my my expectation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonal;
