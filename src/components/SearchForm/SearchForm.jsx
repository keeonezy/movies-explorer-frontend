import "./SearchForm.css";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import seachIcon from "../../images/seachform-find.svg"

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <fieldset className="search-form__data">
                    <img src={seachIcon} alt="Иконка поиска" className="search-form__find" />
                    <input type="text" className="search-form__input input" placeholder="Фильм" required />
                    <button className="search-form__button-next button"></button>
                </fieldset>
            </form>

            <FilterCheckbox />
        </section>
    )
}

export { SearchForm };