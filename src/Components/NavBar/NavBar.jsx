import React from "react";
import "./NavBar.css";
import Button from "../Buttons/Button";
import { NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav_Container">
      <div className="logo_container">
        <img src="./GRTPAY_logo_full.png" alt="logo" className="nav_logo" />
      </div>
      <ul className="nav_List">
        <li>KEYNOTE</li>
        <li>DEVRELEASES</li>
        <li>PRODUCTS</li>
        <li>WIKI</li>
        <li>CALCULATOR</li>
        <li>MECHANICS</li>
      </ul>
      <NavLink to="Buy_Now"><Button value="Buy"/></NavLink>
    </div>
  );
}
