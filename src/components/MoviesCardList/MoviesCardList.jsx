import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <>
            <div className="movies-card-list">
                <ul className="movies-card-list__cards">
                    <MoviesCard />
                </ul>
            </div>

            <button className="movies-card-list__button">Ещё</button>
        </>
    )
}

export { MoviesCardList };