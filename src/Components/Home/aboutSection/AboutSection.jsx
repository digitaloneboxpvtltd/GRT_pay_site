import React from "react";
import Button from "../../Buttons/Button";
import "./AboutSection.css"
import { NavLink } from "react-router-dom";
export default function AboutSection(){

    return (<div className="aboutSection_container">
        <h1 className="Section_heading">What Is GRT-Pay?</h1>
        <h1 className="another_h1">Speed Meets Security</h1>
        <p>GRT-Pay, inspired by Bitcoin and Kaspa, is the world’s most advanced layer 1 blockchain. A cutting-edge Proof-of-Work <br/> (PoW) algorithm that delivers industry-leading speeds, unbeatable security, and high decentralization. Built for the future,<br/> GRT-Pay can power everyday applications to enterprise-grade DeFi protocols. With the power to mine from anywhere,<br/> GRT-Pay makes crypto mining simple, for everyone.</p>
        <div className="mobile_page_buttons">
         <NavLink to="Learn_Now"><Button value="Learn More" /></NavLink> 
          <Button value="DAGpaper v2" trans ="trans"/>
        </div>
    </div>)
}