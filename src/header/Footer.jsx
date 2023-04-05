import React from "react";
import { NavLink } from "react-router-dom";
import { GiGamepad } from "react-icons/gi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="display_none">
        <div className="footer_ready_div">
          <p>
            Ready to get started ?<br />
            Talk to us today
          </p>
          <button className="get_started_btn">
            <NavLink to="/products">Get Started</NavLink>
          </button>
        </div>
        <div className="main_footer">
          <div className="main_parent_4div">
            <div className="footer_akib_div">
              <p className="Footer_akib">Akib Khan</p>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
              </p>
            </div>
            <div className="footer_subsc_div">
              <p className="Footer_akib">
                Subscribe to get important
                <br /> updates
              </p>
              <input
                className="input_email"
                type="email"
                placeholder="Your E-Mail"
              />
              <button className="subs_btn">SUBSCRIBE</button>
            </div>
            <div className="footer_follow_div">
              <p className="Footer_akib">Follow Us</p>
              <GiGamepad className="footer_icon" />
              <a href="https://www.instagram.com/accounts/login/">
                <AiOutlineInstagram className="footer_icon" />
              </a>
              <a href="https://www.youtube.com/">
                <AiFillYoutube className="footer_icon" />
              </a>
            </div>
            <div className="footer_call_div">
              <p className="Footer_akib">Call Us</p>
              <a href="tel:+91 7906810922">+91 7906810922</a>
            </div>
          </div>
        </div>
        <div className="footer_line">
          <hr className="hr_line" />
          <div className="footer_policy">
            <p className="para_policy">Privacy policy | term & condition</p>
            <p className="para_policy">
              @ {new Date().getFullYear()} Akib Khan all right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
