import Card from "../../components/Card/Card";
import NewCardButton from "../../components/NewCardButton/NewCardButton";


function Wallet(){
    return (
        <>
            <h2>E-WALLET</h2>
            <label>ACTIVE CARD</label>
            <Card />
            {/* <cardCollection /> */}
            <NewCardButton/>
        </>
    )
}

export default Wallet;