import "../Card/card.css";
import chipDark from "../../assets/chip-dark.svg";
import chipLight from "../../assets/chip-light.svg";
import bitcoin from "../../assets/vendor-bitcoin.svg";
import blockchain from "../../assets/vendor-blockchain.svg";
import evil from "../../assets/vendor-evil.svg";
import ninja from "../../assets/vendor-ninja.svg";

import { useContext } from "react";
import { CardContext } from "../../App";

const vendorImages = {
    "bitcoin": bitcoin,
    "blockchain": blockchain,
    "evil": evil,
    "ninja": ninja,
};

const chipImages = {
    "chipDark": chipDark,
    "chipLight": chipLight,
};

function Card(){

    const CardInfo = useContext(CardContext);
    const img = vendorImages[CardInfo.vendor];
    const chip = chipImages[CardInfo.chip];

    return (
        <div className={"Card " + CardInfo.vendor + " " + CardInfo.chip}>

            <div className="top">
                <img src={chip} className="chip" />
                <img src={img} className={ "vendor " + CardInfo.vendor } />
            </div>
            <div>
                <h3 className="cardNumber">{CardInfo.number}</h3>
            </div>
            <div className="cardInfo">
                <article className="cardName">
                    <label htmlFor="p">CARDHOLDER NAME</label>
                    <p>{CardInfo.name}</p>
                </article>
                <article className="cardDate">
                    <label htmlFor="p">VALID THROUGH</label>
                    <p>{CardInfo.date}</p>
                </article>
            </div>

        </div>
    )
};

export default Card