import "./MoviesCardList.css";

function MoviesCardList() {
    return (
        <>
            <div className="movies-card-list">
                <ul className="movies-card-list__cards"></ul>
            </div>

            <button className="movies-card-list__button">Ещё</button>
        </>
    )
}

export { MoviesCardList };