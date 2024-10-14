import React from "react";
import './Tokenomics.css'
import Box from "../../Box/Box";
import Button from "../../Buttons/Button";
import { useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

export default function Tokenomics() {
const graphImage = useRef();

useEffect(()=>{
 function handleObserver(entries){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            graphImage.current.classList.add('graph_img_rotate');
        }
        if(!entry.isIntersecting){
            graphImage.current.classList.remove('graph_img_rotate');
        }
      });
 }

const observer = new IntersectionObserver(handleObserver,{threshold:0.4,});

if(graphImage.current)observer.observe(graphImage.current)

return () => {
    if (graphImage.current) {
        observer.unobserve(graphImage.current);
    }
};
},[])

    return (<div className="Tokenomics_Section_Container">
        <h1 className="section_heading">TOKENOMICS</h1>
        <h2 className="another_heading">GRT-Pay coin (BDAG) has a supply of 150 billion coins, a testament to its exclusivity and value preservation.</h2>
        <img src="./Tokenomics_image.svg" alt="tokenomics graph img" className="graph_img " ref={graphImage} />
        
        <div className="graph_Details_container">

            <div className="first_graph">
                <div className="color_box_container"><Box color="rgb(0, 108, 250)"/> <h3>66% Community Allocation</h3></div>
                <p>With 98.5 billion coins set aside, GRT-Pay prioritizes its community, rewarding miners and funding initiatives for a robust ecosystem and seamless trading experience. This allocation represents our commitment to everyone who uses, promotes, and sees GRT-Pay's potential.</p>
            </div>

            <div className="second_graph">
                <div className="color_box_container"><Box color=" rgb(0, 250, 104)"/> <h3>66% Community Allocation</h3></div>
                <p>Before our coins are available to the wider public, our crypto presale offers early supporters an exclusive opportunity to back our vision, often at a preferential rate. It's more than an initial fundraiser; it's about building a dedicated community.</p>
            </div>

            <div className="third_graph">
                <div className="color_box_container"><Box color=" rgb(140, 47, 255)"/> <h3>66% Community Allocation</h3></div>
                <p>We dedicate 1.5 billion coins to our team, locked to align with GRT-Pay's long-term goals, showcasing our commitment to project success and team motivation.</p>
            </div>
        </div>
        <div className="mobile_page_buttons">
        <NavLink to="Learn_Now"><Button value="Learn More" /></NavLink>
            <Button value="DAGpaper v2" trans ="trans"/>
        </div>

    </div>)
}