import"./AddNewCard.css";
import Card from "../../components/Card/Card";
import { NewCardContext, CardContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNumber, setVendor, setChip, setDate, setName, setCCV } from '../../reducers/reducers';

function AddNewCard(){

    const [cardInfo, setCardInfo] = useState({
        chip: 'chipDark',
        vendor: 'none',
        number: 'XXXX XXXX XXXX XXXX',
        name: 'FIRSTNAME LASTNAME',
        date: 'MM/YY',
        CCV: 'XXX'
      });


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setNewCard = useContext(CardContext);

    function cancel () {
        navigate('/');
    };

    function vendorChip(vendor) {
        dispatch(setVendor(vendor))
        if (vendor = "bitcoin" || "" ){
            dispatch(setChip("darkChip"))
        } else { dispatch(setChip("lightChip")) 
        }
    };

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
                <input onKeyUp={(event) => dispatch(setNumber(event.target.value))} placeholder="XXXX XXXX XXXX XXXX"></input>
                <label htmlFor="input">CARDHOLDER NAME</label>
                <input onKeyUp={(event) => dispatch(setName(event.target.value))} type="text"></input>

                <section className="formSiblings">
                    <article className="formSiblings_left">
                        <label htmlFor="input">VALID THROUGH</label>
                        <input onKeyUp={(event) => dispatch(setDate(event.target.value))}></input>
                    </article><article className="formSiblings_right">
                        <label htmlFor="input">CCV</label>
                        <input onKeyUp={(event) => dispatch(setCCV(event.target.value))} maxLength={3} type="number"></input>
                    </article>

                </section>

                <label htmlFor="form">VENDOR</label>
                <form action="#" name="vendor">
                    <select onClick={(event) => vendorChip(event.target.value)} className="vendorSelect" id="vendor" name="vendor">
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