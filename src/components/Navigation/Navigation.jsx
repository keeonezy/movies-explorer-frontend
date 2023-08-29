import "./Navigation.css";
import logo from "../../images/logo.svg";
import headerProfile from "../../images/header-profile.svg";
import { Link, useLocation, NavLink } from "react-router-dom";

function Navigation({ loggedIn }) {
    const pathname = useLocation().pathname;

    return (
        <>
            {!loggedIn ? (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="link">
                            <img src={logo} alt="Логотип" className="header__logo" />
                        </Link>
                    </div>

                    <div className="header__container-right">
                        <NavLink to="/signup" className={`header__signup link ${pathname === "/" ? "header__offer-button" : ""}`}>Регистрация</NavLink>
                        <NavLink to="/signin" className="header__signin link">Войти</NavLink>
                    </div>
                </>
            ) : (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="">
                            <img src={logo} alt="Логотип" className="header__logo" />
                        </Link>

                        <div className="header__navigation">
                            <NavLink to="/movies" className="header__link link">Фильмы</NavLink>
                            <NavLink to="/saved-movies" className="header__link link">Сохранённые фильмы</NavLink>
                        </div>
                    </div>

                    <NavLink to="/profile" className="header__profile link">
                        <p className="header__profile-text">Аккаунт</p>
                        <img src={headerProfile} alt="Иконка профиля" className="header__profile-image" />
                    </NavLink >
                </>
            )}
        </>
    )
}

export { Navigation };