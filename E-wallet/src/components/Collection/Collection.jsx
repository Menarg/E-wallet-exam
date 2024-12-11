import "./Collection.css";
import Card from "../Card/Card";
import { useCollection } from "../../context/CollectionContext";

function Collection({ onCardClick }) {
    const { collection } = useCollection();

    const Cards = collection.map((card, index) => {
        if (!card) {
            console.log("no cards found in collection");
            return null;
        }
        return (
            <div key={index} onClick={() => onCardClick(card)}> 
                <Card cardInfo={card} /> 
            </div>
        );
    });

    return (
        <section className="wallet-collection">
            {Cards}
        </section>
    )
    
};

export default Collection;