import "./Offer.css";
import offerImage from "../../images/offer-image.svg";

function Offer() {
    return (
        <div className="offer">
            <div className="offer__container">
                <div className="offer__container-left">
                    <h1 className="offer__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="offer__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className="offer__button">Узнать больше</button>
                </div>
                <img src={offerImage} alt="" className="offer__image" />
            </div>
        </div>
    )
}

export { Offer };