import Options from "./All_Options/Options";
import "./Step2.css";

export default function Step2(){
    return (
        <div className="step2_section_container">
            <div className="step2_info_container">
                <div className="step2_heading">
                    <img src="./buy_step_images/phone 1.png" alt="" /> 
                    <h2>Step 2</h2>
                </div>
                <p>Once you have your preferred wallet provider ready, click “Connect Wallet” and select the appropriate option. <br/> For mobile wallet apps you will need to select “Wallet Connect”</p>
            </div>

            <div className="step2_option_container">
                <p>You will then have 3 options:</p>

                <Options/>

            </div>

        </div>
    )
}