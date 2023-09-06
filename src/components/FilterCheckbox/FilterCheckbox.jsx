import "./FilterCheckbox.css";

function FilterCheckbox(props) {

    const { handleSearchMoviesButton, setIsChecked, isChecked } = props;

    // Чекбокс обработчик
    const toggleCheckbox = () => {
        handleSearchMoviesButton(!isChecked);
        setIsChecked(!isChecked);
    };

    return (
        <div className="filter-checkbox">
            <label className="switch">
                <input checked={!isChecked} onChange={toggleCheckbox} type="checkbox" className="switch__input" />
                <span className="switch__slider"></span>
            </label>

            <p className="filter-checkbox__description">Короткометражки</p>
        </div>
    )
}

export { FilterCheckbox };