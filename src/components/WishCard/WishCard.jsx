import { useState } from 'react';
import './WishCard.css';

const WishCard = ({ children, task, buttonTitle }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = e => {
        setButtonClicked(val => !val);
    };

    return (<>    
    <div className={`wish-card ${buttonClicked ? 'flipped' : ''}`}><div className="wish-card-inner">
        <div className="wish-card__side wish-card__front">
            <p className="wish-card__task">{task}</p>
            <button type="button" onClick={handleButtonClick} className="wish-card__button">{buttonTitle}</button>
        </div> 
        <div className="wish-card__side wish-card__back">{children}</div>
    </div></div></>)
};

export default WishCard;