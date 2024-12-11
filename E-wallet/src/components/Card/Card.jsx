import "../Card/card.css";
import chipDark from "../../assets/chip-dark.svg";
import chipLight from "../../assets/chip-light.svg";
import bitcoin from "../../assets/vendor-bitcoin.svg";
import blockchain from "../../assets/vendor-blockchain.svg";
import evil from "../../assets/vendor-evil.svg";
import ninja from "../../assets/vendor-ninja.svg";

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

function Card(props){
    const { cardInfo } = props;
    if (!cardInfo) {
        return <div>Something went wrong</div>; // Fallback UI when no card is selected
    }

    const img = vendorImages[cardInfo.vendor] || vendorImages["bitcoin"];
    const chip = cardInfo.vendor === "bitcoin" ? chipDark : chipLight;
    const textColor = `${cardInfo.vendor}-text`;

    return (
        <div className={"Card " + cardInfo.vendor + " " + cardInfo.chip}>
            <div className="top">
                <img src={chip} className="chip" />
                <img src={img} className={ "vendor " + cardInfo.vendor } />
            </div>
            <div>
                <h3 className={`cardNumber ${textColor}`}>{cardInfo.number}</h3>
            </div>
            <div className="cardInfo">
                <article className="cardName">
                    <label className={textColor} htmlFor="p">CARDHOLDER NAME</label>
                    <p className={textColor}>{cardInfo.name}</p>
                </article>
                <article className="cardDate">
                    <label className={textColor} htmlFor="p">VALID THROUGH</label>
                    <p className={textColor}>{cardInfo.date}</p>
                </article>
            </div>

        </div>
    )
};

export default Card