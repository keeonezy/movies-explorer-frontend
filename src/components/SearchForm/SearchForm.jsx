import "./SearchForm.css";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import seachIcon from "../../images/seachform-find.svg"

function SearchForm() {
    return (
        <div className="search-form">
            <form action="" className="search-form__form">
                <fieldset className="search-form__data">
                    <img src={seachIcon} alt="" className="seach-form__find" />
                    <input type="text" className="seach-form__input" placeholder="Фильм" />
                    <button className="seach-form__button-next"></button>
                </fieldset>
            </form>

            <FilterCheckbox />
        </div>
    )
}

export { SearchForm };