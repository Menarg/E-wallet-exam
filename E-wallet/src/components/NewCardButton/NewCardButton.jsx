import { useNavigate } from "react-router-dom";
import "./NewCardButton.css"

function NewCardButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/AddNewCard');
    }

    return (
        <article className="NewCardButton" onClick={ handleClick }>
            <h3>ADD A NEW CARD</h3>
        </article>
    )
}

export default NewCardButton;