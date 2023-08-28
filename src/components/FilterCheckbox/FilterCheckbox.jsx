import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="switch">
                <input type="checkbox" className="switch__input" />
                <span className="switch__slider"></span>
            </label>

            <p className="filter-checkbox__description">Короткометражки</p>
        </div>
    )
}

export { FilterCheckbox };