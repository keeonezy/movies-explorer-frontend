import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";

function Movies({isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="main">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}

export { Movies };