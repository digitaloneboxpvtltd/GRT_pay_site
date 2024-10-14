import React, { useEffect, useRef, useState } from "react";
import "./RoadMap.css";

export default function RoadMap() {
  const [progressBarHeight, setProgressBarHeight] = useState("0%");
  const numberItems = useRef([]);
  const progressBarRef = useRef(null);
  const [current_number,setcurrent_number] = useState(0);
  

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(()=>{setcurrent_number(entry.target)}
          ,1000)

          // Find the intersecting item number index
          const index = numberItems.current.indexOf(entry.target);
          const height = (index ) * (100 / numberItems.current.length + 5);
          setProgressBarHeight(`${height}%`);
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 1, // Trigger when 50% of the item is visible
    });

    // Observe each item number
    numberItems.current.forEach((item) => {
      observer.observe(item);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  
  return (
    <div className="RoadMap_Section">
      <h1 className="RoadMap_heading">ROADMAP</h1>
      <h1 className="RoadMap_another_h1">Build the Future with BDAG coins</h1>

      <div className="main_content_container">
        <div className="progressBar_Line">
          <div className="progressBar" style={{height:progressBarHeight,transition: "height 1s linear"}} ref={progressBarRef}>
          <i class="fa-regular fa-circle-dot fa-xl"></i>          
          </div>
        </div>

        <div className="RoadMap_item_container">
          <div className="first_item items">
            <div className={current_number === numberItems.current[0] ? 'item_number_colorChange  item_number' : 'item_number'}  ref={(el) => (numberItems.current[0] = el) }>01</div>
            <div className="item_content">
              <h2>1. Launch Phase: Crypto Presale and Foundation Setting</h2>
              <ul>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
              </ul>
            </div>
          </div>

          <div className="second_item items">
            <div className={current_number === numberItems.current[1] ? 'item_number_colorChange  item_number' : 'item_number'}  ref={(el) => (numberItems.current[1] = el)}>02</div>
            <div className="item_content">
              <h2>2. Launch Phase: Crypto Presale and Foundation Setting</h2>
              <ul>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
              </ul>
            </div>
          </div>

          <div className="third_item items">
            <div className={current_number === numberItems.current[2] ? 'item_number_colorChange  item_number' : 'item_number'}  ref={(el) => (numberItems.current[2] = el)}>03</div>
            <div className="item_content">
              <h2>3. Launch Phase: Crypto Presale and Foundation Setting</h2>
              <ul>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
              </ul>
            </div>
          </div>

          <div className="forth_item items">
            <div className={current_number === numberItems.current[3] ? 'item_number_colorChange  item_number' : 'item_number'}  ref={(el) => (numberItems.current[3] = el)}>04</div>
            <div className="item_content">
              <h2>4. Launch Phase: Crypto Presale and Foundation Setting</h2>
              <ul>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
              </ul>
            </div>
          </div>

          <div className="third_item items">
            <div className={current_number === numberItems.current[4] ? 'item_number_colorChange  item_number' : 'item_number'}  ref={(el) => (numberItems.current[4] = el)}>05</div>
            <div className="item_content">
              <h2>5. Launch Phase: Crypto Presale and Foundation Setting</h2>
              <ul>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
                <li>Set and publicize the initial valuation of BDAG.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
