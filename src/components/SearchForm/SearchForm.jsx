import "./SearchForm.css";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import seachIcon from "../../images/seachform-find.svg"

function SearchForm(props) {

    const { searchQuery, setSearchQuery, isChecked, setIsChecked, handleSearchMoviesButton } = props;

    const updateSearchInput = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchForm = (e) => {
        e.preventDefault();
        handleSearchMoviesButton(isChecked);
    };

    return (
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSearchForm}>
                <fieldset className="search-form__data">
                    <img src={seachIcon} alt="Иконка поиска" className="search-form__find" />
                    <input onChange={updateSearchInput} value={searchQuery} type="text" className="search-form__input input" placeholder="Введите фильм" required />
                    <button className="search-form__button-next button" type="submit"></button>
                </fieldset>
            </form>

            <FilterCheckbox
                handleSearchMoviesButton={handleSearchMoviesButton}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
            />
        </section>
    )
}

export { SearchForm };