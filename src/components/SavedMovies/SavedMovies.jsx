import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { useState, useMemo, useCallback } from "react";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function SavedMovies(props) {

    const { isLoggedIn, handleSaveMovieSavedList, savedMovies: savedMoviesList, handleDeleteMovieSavedList, } = props

    const [isChecked, setIsChecked] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterString, setFilterString] = useState("");

    const updateFilterString = useCallback(() => {
        setFilterString(searchQuery);
    }, [searchQuery]);

    const filtredMovies = useMemo(() => {
        return savedMoviesList.filter((movie) => {
            const filtredMovieInclude =
                movie.nameRU.toLowerCase().includes(filterString.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(filterString.toLowerCase());
            return isChecked
                ? filtredMovieInclude
                : movie.duration < SHORT_MOVIE_DURATION && filtredMovieInclude;
        });
    }, [filterString, isChecked, savedMoviesList]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="main">
                <SearchForm
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearchMoviesButton={updateFilterString}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
                <MoviesCardList
                    filtredMovies={filtredMovies}
                    handleSaveMovieSavedList={handleSaveMovieSavedList}
                    savedMovies={savedMoviesList}
                    handleDeleteMovieSavedList={handleDeleteMovieSavedList}
                    handleSearchMoviesButton={updateFilterString}
                />
            </main>
            <Footer />
        </>
    )
}

export { SavedMovies };