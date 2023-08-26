import "./Promo.css";
import promoImage from "../../images/promo-image.svg";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <div className="promo__container-left">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className="promo__button">Узнать больше</button>
                </div>
                <img src={promoImage} alt="" className="promo__image" />
            </div>
        </div>
    )
}

export { Promo };