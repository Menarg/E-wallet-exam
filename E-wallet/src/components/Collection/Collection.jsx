// import Collection from "./Collection.css";
import { useSelector } from "react-redux";
import { useContext, useReducer, useState } from "react";
// import { CardContext, NewCardContext } from "../../App";
import Card from "../Card/Card";

function WalletCollection() {
    function updated() {
        useEffect (() => {console.log(initialState)})
    }
    // const collection = reducer();
    // function reducer (){
    //    const cards = useReducer(initialState);
    //    const collection = map(cards)
    //    return collection
    // } 
    // console.log(collection);

    // const cards = useSelector((state) => {
    //     return state.card;
    // });

    // for ( let i=0; i < cards.length; i++) {
    //     collection.push(cards[i])
    // };

    // console.log(cards);
    // return (
    //     <section className="wallet-collection">
    //         <Card CardInfo = { collection }/>
    //     </section>
    // )
    
};

export default WalletCollection;