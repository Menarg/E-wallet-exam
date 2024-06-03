import"./AddNewCard.css";
import Card from "../../components/Card/Card";
import { NewCardContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCard } from '../../reducers/reducers';


function AddNewCard(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newCardNumber, setNewCardNumber] = useState('XXXX XXXX XXXX XXXX');
    const [newCardName, setNewCardName] = useState('FIRSTNAME LASTNAME');
    const [newCardDate, setNewCardDate] = useState('MM/YY');
    const [newCardCCV, setNewCardCCV] = useState('XXX');
    const [newCardvendor, setNewCardVendor] = useState('');
    const [newCardchip, setNewCardChip] = useState('chipDark');

    function  setNumber(number) {
        // console.log(number.target.value);
        setNewCardNumber(number.target.value)
    };
    function  setName(name) {
        setNewCardName(name.target.value)
    };
    function  setDate(date) {
        setNewCardDate(date.target.value)
    };
    function  setCCV(CCV) {
        setNewCardCCV(CCV.target.value)
    };
    function  setVendor(vendor) {
        setNewCardVendor(vendor.target.value)
    };
    function  setChip(chip) {
        setNewCardChip(chip)
    };

    function cancel() {
        navigate('/')
    };

    const card = {
        number: newCardNumber,
        name: newCardName,
        date: newCardDate,
        CCV: newCardCCV,
        vendor: newCardvendor,
        chip: newCardchip
    }

    function createNewCard() {

        // const createCard = useContext(NewCardContext);

        const card = {
            number: newCardNumber,
            name: newCardName,
            date: newCardDate,
            CCV: newCardCCV,
            vendor: newCardvendor,
            chip: newCardchip
        }

        function saveCard () {
            if (card.vendor = 'bitcoin' || '' ){ setChip('chipLight')
            } else { setChip('chipLight') }
            dispatch(setCard(card))
            // createCard(card);
        };

        saveCard();
        
    };

    return (
        <>  
            <header>
                <p className="cancel" onClick={cancel}>CANCEL</p> 
                <h2>ADD A NEWBANK CARD</h2>
            </header>
            
            <label>NEW CARD</label>
            <Card CardInfo= {card}/>
            
            <section className="NewCardForm">

                <label htmlFor="input">CARD NUMBER</label>
                <input onKeyUp={setNumber} placeholder="XXXX XXXX XXXX XXXX"></input>
                <label htmlFor="input">CARDHOLDER NAME</label>
                <input onKeyUp={setName} type="text"></input>

                <section className="formSiblings">
                    <article className="formSiblings_left">
                        <label htmlFor="input">VALID THROUGH</label>
                        <input onKeyUp={setDate}></input>
                    </article><article className="formSiblings_right">
                        <label htmlFor="input">CCV</label>
                        <input onKeyUp={setCCV} maxLength={3} type="number"></input>
                    </article>

                </section>

                <label htmlFor="form">VENDOR</label>
                <form action="#" name="vendor">
                    <select onClick={setVendor} className="vendorSelect" id="vendor" name="vendor">
                        <option value={""}></option>
                        <option value={"bitcoin"}>BITCOIN</option>
                        <option value={"blockchain"}>BLOCKCHAIN</option>
                        <option value={"evil"}>EVIL</option>
                        <option value={"ninja"}>NINJA</option>
                    </select>
                </form>
            </section>
            
            <article className="addNewCardButton" onClick={ createNewCard }>
                <h3>ADD CARD</h3>
            </article>
        </>
    )
};

export default AddNewCard