
import "./Options.css";

export default function Options(){
    return (
    <div className="buy_3Options_container">

        {/* option 1st */}

        <div className="Option_box">
            <div className="image_container">
                <img src="./PaymentOption_img/payment-1.svg" alt="" />
                <img src="./PaymentOption_img/payment-2.svg" alt="" />
                <img src="./PaymentOption_img/payment-3.svg" alt="" />
                <img src="./PaymentOption_img/payment-4.svg" alt="" />
                <img src="./PaymentOption_img/payment-5.svg" alt="" />
                <img src="./PaymentOption_img/payment-6.svg" alt="" />
                <img src="./PaymentOption_img/payment-7.svg" alt="" />
            </div>
            <h2>Buy ETH, BNB & USDT with Apple Pay, Google Pay or Card</h2>
            <p>Visit https://www.moonpay.com/buy this will allow you to purchase ETH, BNB or USDT that will be sent to your wallet. You will then be able to use this ETH, BNB or USDT to purchase BDAG Coins.</p>
        </div>


        {/* option 2nd */}

        <div className="Option_box">
            <div className="image_container image_another_container">
                <img src="./PaymentOption_img/payment-1.svg" alt="" />
                <img src="./PaymentOption_img/payment-3.svg" alt="" /> 
            </div>
            <h2>Buy BlockDAG with ETH or BNB</h2>
            <p>Once you have sufficient ETH or BNB in your wallet (if you do not have ETH, USDT or BNB, please read option 1 first), you can now swap your ETH or BNB for BlockDAG Network. Type in the amount of BlockDAG Network you wish to purchase ($15 minimum ) and then click “Buy with ETH” or “Buy with BNB”. Your wallet provider will ask you to confirm the transaction and will also show you the cost of gas.</p>
        </div>
        

        {/* option 3rd */}

        <div className="Option_box">
            <div className="image_container image_another_container">
                <img src="./PaymentOption_img/payment-2.svg" alt="" />
            </div>
            <h2>Buy BlockDAG with USDT</h2>
            <p>Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of BlockDAG Network you wish to purchase ($15 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.</p>
        </div>

    </div>)
}