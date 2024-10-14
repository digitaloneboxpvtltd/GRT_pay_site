import React from "react";
import "./ShareSection.css"
export default function ShareSection(){
    return (<div className="ShareSecion_container">
        <h1 className="ShareSection_heading">SPREAD THE WORD</h1>
        <h1 className="another_h1">Rally your circle to GRT-Pay, where shared efforts meet unprecedented rewards. Open a new chapter of crypto evolution.</h1>
        
        <div className="shareImage_container">
        <img src="./ShareMobile.png" alt="shareMobile svg" className="shareMobileImg"/>
        <img src="./ShareCircle.png" alt="" className="ShareCircle"/>
        <img src="./ShareBox2.svg" alt="" className="ShareBox2 "/>
        <img src="./ShareBox1.svg" alt=""  className="ShareBox1"/>
        
       
        <img src="./tooDarkShareTrangle.svg" alt=""  className="tooDarkShareTrangle trangle"/>
        <img src="./DarkShareTrangle.svg" alt="" className="DarkShareTrangle trangle"/>
        <img src="./lightShareTrangle.svg" alt="" className="lightShareTrangle trangle"/>
        <img src="./tooLightSharedTrangle.svg" alt="" className="tooLightShareTrangle trangle"/>


        <dir className="shareOption_Container">
        <img src="./Share_Option_logo/email.png" alt="email logo"/>
        <img src="./Share_Option_logo/twitter.png" alt="email logo"/>
        <img src="./Share_Option_logo/facebook.png" alt="email logo"/>
        <img src="./Share_Option_logo/whatsapp.png" alt="email logo"/>
       </dir>

        </div>
      
      
    </div>)
}