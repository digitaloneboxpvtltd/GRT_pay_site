import React ,{useState}from "react";
import "./Mobile.css";
import MobileHome from "./Mobile_home/MobileHome";
import ChargePage from "./charge_page/ChargePage";

export default function Mobile() {
const [mobileHome,setmobileHome] = useState(true)

function moibleHomeShow(){
  setmobileHome(!mobileHome);
}

  return (
    <div className="mobile_Container">
      <img src="./mobile_1.png" alt="mobile svg" className="mobile_frame" />

      <div className="inside_mobile_container">
        <div className="mobile_navbar">
          <p>04:29 pm</p>
          <div className="image_container">
            <img src="./Mobile_related_images/battery.png" alt="mobile_battery" />
            <img src="./Mobile_related_images/signal.png" alt="mobile_signal" />
          </div>
        </div>
        
        {mobileHome?<MobileHome moibleHomeShow={moibleHomeShow}/>:<ChargePage mobileHomeShow={moibleHomeShow}/>}
      </div>
    </div>
  );
}
