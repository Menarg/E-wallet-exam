import "./Wallet.css"
import Card from "../../components/Card/Card";
import NewCardButton from "../../components/NewCardButton/NewCardButton";
import Collection from "../../components/Collection/Collection";
import { useCollection } from "../../context/CollectionContext";
import { useState } from "react";

function Wallet(){
    const {collection} = useCollection()
    const [cardInfo, setCardInfo] = useState(null);

    // Sets activeCard on click
    const handleCardClick = (card) => {
        setCardInfo(card);
    };

    // tells user if collection is empty or to click a card if there is no active card
    let activeCard;
    if (collection.length === 0) {
        activeCard = <h3>No cards found in collection <br/>Add a card to your wallet!</h3>; // Message when no cards are in the collection
    } else if (cardInfo) {
        activeCard = <Card key={0} cardInfo={cardInfo} />;
    } else {
        activeCard = <h3>Click a card in your collection to take a closer look</h3>; // Message when no card is selected
    }
    
    return (
        <div className="wrap">
            <h1>E-Wallet</h1>
            <div className="E-wallet">
                <div className="active">
                    <label>ACTIVE CARD</label>
                    {activeCard}
                </div>
                <div className="Wallet">
                    <label>WALLET</label>
                    <div className="collection">
                        <Collection onCardClick={handleCardClick} />
                    </div>
                    <NewCardButton/>
                </div>
            </div>
        </div>
    )
}

export default Wallet;