import "./MoviesCard.css";
import moviesCard1 from "../../images/movies-card-1.jpg";
import moviesCard2 from "../../images/movies-card-2.jpg";

function MoviesCard() {
    return (
        <>
            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button"></button>
                </div>
                <img src={moviesCard2} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-active"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>

            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">33 слова о дизайне</h2>
                        <p className="movies-card__description">1ч 47м</p>
                    </div>
                    <button className="movies-card__save button movies-card__save-remove"></button>
                </div>
                <img src={moviesCard1} alt="Постер фильма" className="movies-card__image" />
            </li>
        </>
    )
}

export { MoviesCard };