import"./AddNewCard.css";
import Card from "../../components/Card/Card";
import { NewCardContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function AddNewCard(){
    const navigate = useNavigate();

    const setNewCard = useContext(NewCardContext);

    function cancel () {
        navigate('/');
    }

    return (
        <>  
            <header>
                <p className="cancel" onClick={cancel}>CANCEL</p>
                <h2>ADD A NEWBANK CARD</h2>
            </header>
            
            <label>NEW CARD</label>
            <Card />
            
            <section className="NewCardForm">

                <label htmlFor="input">CARD NUMBER</label>
                <input placeholder="XXXX XXXX XXXX XXXX"></input>
                <label htmlFor="input">CARDHOLDER NAME</label>
                <input type="text"></input>

                <section className="formSiblings">
                    <article className="formSiblings_left">
                        <label htmlFor="input">VALID THROUGH</label>
                        <input ></input>
                    </article><article className="formSiblings_right">
                        <label htmlFor="input">CCV</label>
                        <input maxLength={3} type="number"></input>
                    </article>

                </section>

                <label htmlFor="input">VENDOR</label>
                <form action="#">
                    <select className="vendorSelect" id="vendor" name="vendor">
                        <option value={""}></option>
                        <option value={"bitcoin"}>BITCOIN</option>
                        <option value={"blockchain"}>BLOCKCHAIN</option>
                        <option value={"evil"}>EVIL</option>
                        <option value={"ninja"}>NINJA</option>
                    </select>
                </form>
            </section>
            
            <article className="addNewCardButton" onClick={ setNewCard }>
                <h3>ADD CARD</h3>
            </article>
        </>
    )
};

export default AddNewCard