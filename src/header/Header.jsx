import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const addedItems = useSelector((state) => state.cart.item);

  return (
    <>
      <header className="Main_header">
        <div className="logo_div">
          <NavLink to="/">
            <h2 className="logo">AKIB KHAN</h2>
          </NavLink>
        </div>

        <ul
          className={mobile ? "page_link_mobile" : "page_link"}
          onClick={() => setMobile(false)}
        >
          <li className="list_item">
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li className="list_item">
            <NavLink to="/about">About</NavLink>
          </li> */}
          <li className="list_item">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="list_item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="list_item">
            <button className="button_log">Log out</button>
          </li>
          <NavLink to="/cart">
            <li className="list_item">
              <FaCartArrowDown className="badge_icon" />
              <span className="badge_no">{addedItems.length}</span>
            </li>
          </NavLink>
        </ul>
        <button className="mobile_manu_icon" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <RxCross2 className="cross" />
          ) : (
            <FaBars className="threeline" />
          )}
        </button>

        {/* <button className="mobile_manu_icon"></button> */}
      </header>
    </>
  );
};

export default Header;
