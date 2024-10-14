import Button from "../../Buttons/Button";
import "./Referral_Bonus.css";

export default function ReferralBonus() {
  return (
    <div className="ReferralBonus_Section_Container">
        <div className="ReferralBonus_Container">
            
            <div className="ReferralBonus_info">
                <h1>Earn a 10% bonus from all referred investors!</h1>
                <p>Share your unique link with friends, family, and your network, to
                   automatically receive 10% of all of their investments in BDAG.
                </p>
            </div>

            <div className="ReferralBonus_Link_info_Container">
                <h2>Earn more BDAG by referring your friends and community!</h2>
                <p>Share your unique link below and receive</p>
                <p>10% of all transactions realized with your link instantly!</p>

                <div className="Referral_link_container">
                    <form action="">
                        <div className="input_button_container">
                            <input type="text" placeholder="Connect wallet for referral link"/>
                            <button className="keyInput_button">Copy</button>
                        </div>
                    </form>
                </div>

                <div className="Connect_wallet_Button_Container"> 
                <Button value="Connect Wallet" className="wallet_Button"/>
                </div>
            

                <p>Share it directly on your social media!</p>

                <div className="Payment_options_container">
                    <img src="./Share_Option_logo/email.png" alt="" />
                    <img src="./Share_Option_logo/whatsapp.png" alt="" />
                    <img src="./Share_Option_logo/twitter.png" alt="" />
                    <img src="./Share_Option_logo/facebook.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}
