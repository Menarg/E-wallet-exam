import "./Card.scss"

function Card(){
    return(
        <div className="Card">

            <div className="">
                <image className="chip"></image>
                <image className="vendor"></image>
            </div>
            <div>
                <h3>number</h3>
            </div>
            <div>
                <label htmlFor="p">CARDHOLDER NAME</label>
                <p>cardholder name</p>
            
                <label htmlFor="p">VALID THROUGH</label>
                <p>date</p>
            </div>

        </div>
    )
};

export default Card