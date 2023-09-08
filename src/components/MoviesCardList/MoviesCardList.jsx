import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import { SCREEN_WIDTH_LAPTOP, SCREEN_WIDTH_TABLET, LARGE_MOVIES_VALUES, MEDIUM_MOVIES_VALUES, SMALL_MOVIES_VALUES, BUTTON_LARGE_MOVIES_VALUES, BUTTON_SMALL_MOVIES_VALUES, } from "../../utils/constants";

function MoviesCardList(props) {

    const { isLoader, movies, savedMovies, handleSaveMovieSavedList, handleDeleteMovieSavedList, filtredMovies, updateSearchInput } = props

    const [showPagination, setShowPagination] = useState(false);

    const { pathname } = useLocation();

    const currentMoviesList = pathname === "/movies" ? movies : filtredMovies;

    const [moviesPage, setMoviesPage] = useState(() => {
        if (window.innerWidth >= SCREEN_WIDTH_LAPTOP) return LARGE_MOVIES_VALUES;
        else if (
            window.innerWidth < SCREEN_WIDTH_LAPTOP &&
            window.innerWidth >= SCREEN_WIDTH_TABLET
        )
            return MEDIUM_MOVIES_VALUES;
        else if (window.innerWidth < SCREEN_WIDTH_TABLET) return SMALL_MOVIES_VALUES;
    });

    useEffect(() => {
        updateMoviesPage();
        window.addEventListener("resize", updateMoviesPage);
        return () => {
            window.removeEventListener("resize", updateMoviesPage);
        };
    }, []);

    useEffect(() => {
        if (currentMoviesList.length === 0) {
            setShowPagination(false);
        }
        if (moviesPage >= currentMoviesList.length) setShowPagination(false);
        else setShowPagination(true);
    }, [currentMoviesList, moviesPage]);

    const updateMoviesPage = () => {
        if (window.innerWidth >= SCREEN_WIDTH_LAPTOP)
            return setMoviesPage(LARGE_MOVIES_VALUES);
        else if (
            window.innerWidth < SCREEN_WIDTH_LAPTOP &&
            window.innerWidth >= SCREEN_WIDTH_TABLET
        )
            return setMoviesPage(MEDIUM_MOVIES_VALUES);
        else if (window.innerWidth < SCREEN_WIDTH_TABLET)
            return setMoviesPage(SMALL_MOVIES_VALUES);
    }

    const increaseMoviesPage = () => {
        if (window.innerWidth >= SCREEN_WIDTH_LAPTOP)
            return setMoviesPage(moviesPage + BUTTON_LARGE_MOVIES_VALUES);
        else if (window.innerWidth < SCREEN_WIDTH_LAPTOP)
            return setMoviesPage(moviesPage + BUTTON_SMALL_MOVIES_VALUES);
    }

    return (
        <>
            <section className="movies-card-list">

                {isLoader && <Preloader />}

                {pathname === "/saved-movies" &&
                    currentMoviesList.length === 0 && (
                        <div className="movies-card-list__text-error">Фильмов нету в сохраненных</div>
                    )}

                {pathname === "/movies" &&
                    currentMoviesList.length === 0 && localStorage.getItem('searchQuery') !== null && (
                        <div className="movies-card-list__text-error">Фильм не был найден</div>
                    )}

                <ul className="movies-card-list__cards ul">
                    {currentMoviesList.slice(0, moviesPage).map((movie) => (
                        <MoviesCard
                            key={movie.id || movie.movieId}
                            movie={movie}
                            savedMovies={savedMovies}
                            filtredMovies={filtredMovies}
                            handleSaveMovieSavedList={handleSaveMovieSavedList}
                            handleDeleteMovieSavedList={handleDeleteMovieSavedList}
                        />
                    ))}
                </ul>

                {showPagination && (
                    <button onClick={increaseMoviesPage} className="movies-card-list__button button" type="button">Ещё</button>
                )}

            </section>
        </>
    )
}

export { MoviesCardList };