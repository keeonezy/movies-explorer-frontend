import "./Promo.css";
import promoImage from "../../images/promo-image.svg";
import { Link } from "react-router-dom";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__container-left">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <Link to="#about-project" reloadDocument className="promo__button link">Узнать больше</Link>
                </div>
                <img src={promoImage} alt="Планета из слов веб" className="promo__image" />
            </div>
        </section>
    )
}

export { Promo };