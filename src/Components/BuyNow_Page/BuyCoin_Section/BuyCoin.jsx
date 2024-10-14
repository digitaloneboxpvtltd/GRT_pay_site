import Button from "../../Buttons/Button";
import "./BuyCoin.css"
import { useState } from "react";


export default function BuyCoin(){
    const [IsKeyPresent,setIsKeyPresent] = useState(false);

    function keyPresentHandle(){
        setIsKeyPresent(!IsKeyPresent)
    }
    return (
    <div className="BuyCoin_Section_Container">
        <div className="BuyCoin_Container">
            <div className="BuyCoin_info">
                <h1>Join GRT-Pay Network, Connect & Contribute</h1>
                <p>Explore the GRT-Pay ecosystem at your own pace. Join effortlessly using your crypto wallet, credit or debit cards, Apple Pay, or Google Pay. Become a valued member of our community and embrace the simplicity of connection today.</p>
                <div className="Button_Container">
                <Button value="HowToBuy"/>
                <Button value="DAGPaper v2" trans="trans"/>
                </div>
            </div>
            <div className="BuyCoin_Batch_info_Container">
                <p className="head"><span>Current Batch</span> BATCH 9</p>

                <div className="Coin_Buy_Box">
                    <div className="Remaining_coin_Container">
                        <div className="sels_Coins_total">
                            <section><p>Total Coin Sales USD</p><h2>$19,917,343.53</h2></section>
                            <hr/>
                            <section><p>Total Coin Sold</p><h2>8,080,400,144</h2></section>
                        </div>
                        <div className="coin_selse_Progress_container">
                            <div className="coin_selse_progress">Remaining 16.3M </div>
                        </div>
                        <div className="other_Remaining_coin_info">
                            <p>0.005 USDT = 1 BDAG</p>
                            <p>Next Batch: 0.006</p>
                        </div>
                    </div>
                    <div className="Buy_coin_Container">
                        <p>Buy Coins</p>
                        <img src="./another white logo.png" alt="another logo" />
                    </div>
                </div>

                <div className="Miner_Buy_Box">
                    <div className="sels_Miner_total">
                        <section><p>Total Miner Sales USD</p><h2>$2,280,900</h2></section>
                        <hr/>
                        <section><p>Total Miners Sold</p><h2>4917</h2></section>
                    </div>
                    <div className="Buy_Miner_Container">
                        <p>Buy Miners</p>
                        <img src="./minerLogo.svg" alt="another logo" />
                    </div>
                </div>

                <div className="Payment_options_container">
                    <img src="./PaymentOption_img/payment-1.svg" alt="" />
                    <img src="./PaymentOption_img/payment-2.svg" alt="" />
                    <img src="./PaymentOption_img/payment-3.svg" alt="" />
                    <img src="./PaymentOption_img/payment-4.svg" alt="" />
                    <img src="./PaymentOption_img/payment-5.svg" alt="" />
                    <img src="./PaymentOption_img/payment-6.svg" alt="" />
                    <img src="./PaymentOption_img/payment-7.svg" alt="" />
                </div>

                <div className="special_key_container">
                    <p className={IsKeyPresent?"present":"keyPresentText"} onClick={keyPresentHandle}>Do you have Special Key?</p>
                    <form action="">
                    <div className={IsKeyPresent?"input_button_container":"present"}>
                        <input type="text"  placeholder="Enter key"/>
                        <button className="keyInput_button">Apply</button>
                    </div>
                    </form>
                </div>

                <div style={{fontSize:"0.7rem", color:" rgb(155, 152, 152)",lineHeight:"0.1"}}>
                <p>Powered by</p> <img src="./PaymentOption_img/web3secure.svg" alt="" style={{width:"6rem"}}/>
                </div>
            </div>



        </div>
    </div>)
}