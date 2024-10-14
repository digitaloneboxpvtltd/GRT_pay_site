import React from "react";
import "./Home.css"
import Carousel from "../Home_Carousel/Caraousel";
import Mobilepage from "../Mobile_page/Mobilepage";
import AboutSection from "./aboutSection/AboutSection";
import ShareSection from "./Share_Section_Home/ShareSection";
import RoadMap from "./RoadMap_Section/RoadMap";
import Tokenomics from "./Tokenomic_Section/Tokenomics";
import Press from "./PressSection/Press";
import FAQ from "./FAQ_Section/FAQ";
import HomeFooter from "./Home_Footer/HomeFooter";

export default function Home(){
    return (<div className="Home_container">
    <Carousel/>
    <Mobilepage/>
    <AboutSection/>
    <ShareSection/>
    <RoadMap/>
    <Tokenomics/>
    <Press/>
    <FAQ/>
    <HomeFooter/>
    </div>)
}