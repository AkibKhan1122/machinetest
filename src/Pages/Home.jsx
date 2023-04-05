import React from "react";
import "./Pages.css";
import { NavLink } from "react-router-dom";
import { BsArrowUpLeftCircle, BsFillSuitHeartFill } from "react-icons/bs";
import { FaWaveSquare, FaHourglassHalf } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="home_main_div">
        <div className="home_parant_div">
          <div className="prepare_div">
            <h1 className="ginogoba">GINOGOBA</h1>
            <h1 className="prepare_h">
              Prepare your Body for a Passionate Erotic Night
            </h1>
            <p className="brown_p">
              Brown boys are a great attraction for women around the world.
              <br /> I am not boasting here, but the use of GINGOBA herb for
              generationsin our culture may have influenced it in some way.
            </p>
            <NavLink to="/products">
              <button className="go_to">Go To Our Products</button>
            </NavLink>
          </div>
          <div className="home_img_div">
            <img src="machineimg.jpg" className="home_img" />
          </div>
        </div>
        <div className="grow_up_div">
          <div className="parant_grow_div">
            <div className="importance">
              <div className="arrow_div">
                <FiArrowUpLeft className="arrow" />
                <h2 className="heading_grow">Impotence</h2>
                <p className="paracommon">
                  Impotence is the inability to get and keep an erection firm
                  enough for
                </p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <FaWaveSquare className="arrow" />
                <h2 className="heading_grow">Increase Time</h2>
                <p className="paracommon">Increasing your Stamina on Bed</p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <BsFillSuitHeartFill className="arrow" />
                <h2 className="heading_grow">Erection Longer</h2>
                <p className="paracommon">Amke you erected for a long time</p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <FaHourglassHalf className="arrow" />
                <h2 className="heading_grow">Premature Ejaculation</h2>
                <p className="paracommon">Making hard & Matured fluid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
