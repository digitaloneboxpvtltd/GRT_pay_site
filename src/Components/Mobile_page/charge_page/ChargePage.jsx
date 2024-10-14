import { useState } from "react";
import React from "react";
import "./ChargePage.css";
import { NavLink } from "react-router-dom";

export default function ChargePage(props) {
  const [isnavtoggle,setisnavtoggle] = useState(false);

  function handleNavToggle(){
setisnavtoggle(!isnavtoggle)
  }

  return (
    <div className="charge_page_container">
      <nav>
        <i class={isnavtoggle?"fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleNavToggle}/>
        <h1>168.0341</h1>
        <h1 className="logo_inside_mobile_container">
          <img
            src="./GRT_black_logo.png"
            alt="logo"
            className="logo_inside_mobile"
          />
        </h1>

        <div className={isnavtoggle?"toggledNav_container":"toggledNav_container toggledNav_container_show"}>
          <ul>
            <li onClick={()=>props.mobileHomeShow()}><i class="fa-solid fa-house fa-sm"/>Home</li>
            <li><i class="fa-solid fa-rocket fa-sm"/>share and Boost</li>
            <NavLink to="Buy_Now" className="NavLinkStyle" ><li><i class="fa-solid fa-cart-shopping fa-sm"/>Buy DAG</li></NavLink>
            <li><i class="fa-solid fa-circle-question fa-sm"/>FAQs</li>
          </ul>
        </div>
      </nav>

      <div className="chargePage_body">
        <select name="ATP BlockDAG server" id="" selected="ATP server">
          <option value="ATP server">ATP GRT-Pay server</option>
        </select>
        <p>0.00 BDAG/h</p>

        <div className="chargeing_container">
          <img
            src="./chargePage_image/circle_owal.svg"
            alt="owel_circle"
            className="owel_circle"
          />
          <img
            src="./chargePage_image/circle_owal1.svg"
            alt="owel_circle"
            className="owel_circle owel_circle1"
          />
          <img
            src="./chargePage_image/circle_owal2.svg"
            alt="owel_circle"
            className="owel_circle owel_circle2"
          />
          <img
            src="./chargePage_image/circle_owal3.svg"
            alt="owel_circle"
            className="owel_circle owel_circle3"
          />
          <img
            src="./chargePage_image/thunder.png"
            alt="thunder png"
            className="thunder_charge_img"
          />
          <span className="shadow_help">.</span>
        </div>

        <NavLink to="Buy_Now" className="NavLinkStyle" ><button className="charge_Button">Fully Charged</button></NavLink>
  
        <p style={{ padding: "0.5rem" }}>
          Once the clock hits 24, gear up for another mining run!
        </p>
      </div>

      <footer className="charge_page_footer">

        <div className="left_box"><i class="fa-solid fa-users fa-sm"></i>
        <p>Invite</p></div>
        <button className="mid_box">
        <img
            src="./chargePage_image/thunder.png"
            alt="thunder png"
            className="thunder_charge_img"
          />
        </button>

        <div className="right_box"><i class="fa-regular fa-comment-dots fa-sm"></i>
        <p>Chat</p></div>
      </footer>
    </div>
  );
}
