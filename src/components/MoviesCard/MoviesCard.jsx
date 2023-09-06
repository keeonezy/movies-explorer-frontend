import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { MOVIES_URL } from "../../utils/constants";

function MoviesCard(props) {
    const { movie, savedMovies, handleSaveMovieSavedList, handleDeleteMovieSavedList } = props;

    const { pathname } = useLocation();

    // Длительность фильма
    const countMovieDuration = (length) => {
        if (length >= 60) {
            return `${Math.floor(length / 60)}ч ${length % 60}м`;
        }
        return `${length}м`;
    };

    // Сохранен ли фильм из списка
    const isLiked = useMemo(() => {
        return savedMovies.some((m) => m.movieId === movie.id);
    }, [movie, savedMovies]);

    // Обработчик кнопок для фильма
    const toggleLike = () => {
        !isLiked ? handleSaveMovieSavedList(movie) : handleDeleteMovieSavedList(movie);
    }

    // Смена класса для кнопки
    const movieLikeButtonClassName = `movies-card__save button ${isLiked ? "movies-card__save-active" : ""
        }`;

    // Удаление фильма
    const handleRemoveSavedMovie = () => {
        return handleDeleteMovieSavedList(movie);
    }

    return (
        <>
            <li className="movies-card">
                <div className="movies-card__container">
                    <div className="movies-card__container-left">
                        <h2 className="movies-card__title">{movie.nameRU || movie.nameEN}</h2>
                        <p className="movies-card__description">{countMovieDuration(movie.duration)}</p>
                    </div>
                    {pathname === "/movies" ? (
                        <button
                            className={movieLikeButtonClassName}
                            type="button"
                            onClick={toggleLike}
                        />
                    ) : (
                        <button
                            className="movies-card__save button movies-card__save-remove"
                            type="button"
                            onClick={handleRemoveSavedMovie}
                        />
                    )}
                </div>
                <a href={movie.trailerLink} className="link" target="_blank" rel="noreferrer noopener">
                    <img src={movie.image.url ? `${MOVIES_URL}${movie.image.url}` : movie.image} alt={movie.nameRU || movie.nameEN} className="movies-card__image" />
                </a>
            </li>
        </>
    )
}

export { MoviesCard };