import HomeFooter from "../Home/Home_Footer/HomeFooter"
import BuyCoin from "./BuyCoin_Section/BuyCoin"
import "./BuyNowPage.css"
import HowToBuy from "./How_To_Buy_Section/HowToBuy"
import ReferralBonus from "./Referal_Bonus_Section/Referal_Bonus"

export default function BuyNowPage(){
    
    return(<div className="BuyNowPage_container">
      <BuyCoin/>
      <ReferralBonus/>
      <HowToBuy/>
      <HomeFooter/>
    </div>)
}