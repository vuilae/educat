import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };
  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="previous"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Maria Benna</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                culpa cum est. Ratione omnis molestiae adipisci quidem harum,
                nostrum voluptatibus illo nam, cum sapiente dolorem ad? Cumque
                consequatur obcaecati esse.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Yudji Toshu</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                culpa cum est. Ratione omnis molestiae adipisci quidem harum,
                nostrum voluptatibus illo nam, cum sapiente dolorem ad? Cumque
                consequatur obcaecati esse.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ben Apeck</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                culpa cum est. Ratione omnis molestiae adipisci quidem harum,
                nostrum voluptatibus illo nam, cum sapiente dolorem ad? Cumque
                consequatur obcaecati esse.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ella Dain</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                culpa cum est. Ratione omnis molestiae adipisci quidem harum,
                nostrum voluptatibus illo nam, cum sapiente dolorem ad? Cumque
                consequatur obcaecati esse.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
