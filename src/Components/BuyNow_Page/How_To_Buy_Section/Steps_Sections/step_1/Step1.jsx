import "./Step1.css";

export default function Step1(){
    return (
        <div className="step1_section_container">
            <div className="step1_info_container">
                <div className="step1_heading">
                    <img src="./buy_step_images/wallet 1.png" alt="" /> 
                    <h2>Step 1</h2>
                </div>

                <div className="step1_info">
                    <p>To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet or Plus Wallet).</p>
                    <p>Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask.</p>
                    <p>If you are purchasing on mobile, we recommend using Trust Wallet or Plus Wallet and connecting through built in Wallet Connect.</p>
                </div>

            </div>

            <div className="step1_image">
                <img src="./How_to_Buy_image/step1_3.png" alt="png" />
            </div>
        </div>
    )
}