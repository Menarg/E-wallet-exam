import Card from "../../components/Card/Card";
import NewCardButton from "../../components/NewCardButton/NewCardButton";
import WalletCollection from "../../components/Collection/Collection";
import { useContext } from "react";
import { CardContext } from "../../App";

function Wallet(){

    //placeholder
    const cardInfo = useContext(CardContext)
    console.log(cardInfo);
    
    return (
        <>
            <h2>E-WALLET</h2>
            <label>ACTIVE CARD</label>
            <Card CardInfo = {cardInfo}/>
            <label>WALLET</label>
            <WalletCollection/>
            <NewCardButton/>
        </>
    )
}

export default Wallet;