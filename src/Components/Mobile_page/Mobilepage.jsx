import "./Mobilepage.css";
import Button from "../Buttons/Button";
import Mobile from "./Mobile";
import {NavLink } from "react-router-dom";
export default function Mobile_Page(){

    return(<div className="mobile_page_Container">
    <h1 className="mobile_page_heading">PRESALE</h1>
    <h3>$17.1M Raised So Far.</h3>
    <p className="mobile_page_para">Join the GRT-Pay presale, engage with the project, and see your contribution grow to new heights.</p>
    <div className="mobile_page_buttons">
       <NavLink to="Buy_Now"><Button value="join Presale" /></NavLink> 
       <NavLink to="Buy_Now"> <Button value="How to Buy" trans ="trans"/></NavLink> 
    </div>
    <Mobile/>
    </div>)
}