import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

    const { isLoggedIn, isLoader, handleSaveMovieSavedList, handleDeleteMovieSavedList, savedMovies, allMovies } = props;

    const [isChecked, setIsChecked] = useState(
        localStorage.getItem("isShortChecked") === "true" || true
    );
    const [inputError, setInputError] = useState(false);

    const [searchQuery, setSearchQuery] = useState(
        localStorage.getItem("searchQuery") || ""
    );

    const [filteredMoviesData, setFilteredMoviesData] = useState(
        localStorage.getItem("filteredMoviesData")
            ? JSON.parse(localStorage.getItem("filteredMoviesData"))
            : []
    );

    function handleSearchMoviesButton(isChecked) {
        if (!searchQuery) {
            setInputError(true);
            return;
        } else {
            setInputError(false);
            const movies = allMovies.filter((movie) => {
                const filteredMovieInclude = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
                return isChecked ? filteredMovieInclude : movie.duration < SHORT_MOVIE_DURATION && filteredMovieInclude;
            });
            setFilteredMoviesData(movies);
            localStorage.setItem("isShortChecked", isChecked.toString());
            localStorage.setItem("filteredMoviesData", JSON.stringify(movies));
            localStorage.setItem("searchQuery", searchQuery);
        }
    }

    useEffect(() => {
        localStorage.setItem("isShortChecked", isChecked.toString());
    }, [isChecked]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="main">
                <SearchForm
                    inputError={inputError}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearchMoviesButton={handleSearchMoviesButton}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
                <Preloader isLoader={isLoader} />

                {!inputError && (
                    <MoviesCardList
                        isLoader={isLoader}
                        handleSaveMovieSavedList={handleSaveMovieSavedList}
                        savedMovies={savedMovies}
                        handleDeleteMovieSavedList={handleDeleteMovieSavedList}
                        movies={filteredMoviesData}
                        filtredMovies={filteredMoviesData}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}

export { Movies };