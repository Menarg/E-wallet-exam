import { useNavigate } from "react-router-dom";

function NewCardButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/AddNewCard');
    }

    return (
        <article onClick={ handleClick }>
            <h3>Add New Card</h3>
        </article>
    )
}

export default NewCardButton;