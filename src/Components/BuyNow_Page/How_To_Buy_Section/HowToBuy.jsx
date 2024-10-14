import "./HowToBuy.css";
import Step1 from "./Steps_Sections/step_1/Step1";
import Step2 from "./Steps_Sections/step_2/Step2";
import Step3 from "./Steps_Sections/step_3/Step3";

export default function HowToBuy(){

    return(
    <div className="How_to_buy_Section">
        <h1 className="How_to_buy_heading">How to buy BlockDAG Coins</h1>
        <Step1/>
        <Step2/>
        <Step3/>
    </div>
    )
}