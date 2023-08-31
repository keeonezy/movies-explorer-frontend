import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <>
            <section className="movies-card-list">
                <ul className="movies-card-list__cards ul">
                    <MoviesCard />
                </ul>

                <button className="movies-card-list__button button">Ещё</button>
            </section>
        </>
    )
}

export { MoviesCardList };