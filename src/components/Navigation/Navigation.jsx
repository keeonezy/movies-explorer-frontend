import "./Navigation.css";
import logo from "../../images/logo.svg";
import headerProfile from "../../images/header-profile.svg";
import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import headerMenu from "../../images/header-menu.svg";

function Navigation({ loggedIn }) {
    const pathname = useLocation().pathname;

    const [menuOpen, setMenuOpen] = React.useState(false);

    function handleMenuButtonClick() {
        setMenuOpen(true);
    }

    function handleCloseMenuButtonClick() {
        setMenuOpen(false);
    }


    return (
        <>
            {!loggedIn ? (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="link">
                            <img src={logo} alt="Логотип" className="logo" />
                        </Link>
                    </div>

                    <div className="header__container-right">
                        <NavLink to="/signup" className={`header__signup link ${pathname === "/" ? "promo" : ""}`}>Регистрация</NavLink>
                        <NavLink to="/signin" className="header__signin link">Войти</NavLink>
                    </div>
                </>
            ) : (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="">
                            <img src={logo} alt="Логотип" className="logo" />
                        </Link>

                        <nav className="header__navigation">
                            <NavLink to="/movies" className={`header__link link ${pathname === "/" ? "promo" : ""}`}>Фильмы</NavLink>
                            <NavLink to="/saved-movies" className={`header__link link ${pathname === "/" ? "promo" : ""}`}>Сохранённые фильмы</NavLink>
                        </nav>
                    </div>

                    <NavLink to="/profile" className="header__profile link">
                        <p className={`header__profile-text ${pathname === "/" ? "promo" : ""}`}>Аккаунт</p>
                        <img src={headerProfile} alt="Иконка профиля" className="header__profile-image" />
                    </NavLink >

                    <img src={headerMenu} alt="Иконка меню" className="header__menu" onClick={handleMenuButtonClick} />

                    <div className={`menu ${menuOpen ? 'menu_active' : ''}`}>
                        <div className="menu__container">
                            <button className="menu__button-close button" onClick={handleCloseMenuButtonClick}></button>
                            <ul className="menu__links ul">
                                <li><NavLink to="/" className="header__link menu__link link">Главная</NavLink></li>
                                <li><NavLink to="/movies" className="header__link menu__link link">Фильмы</NavLink></li>
                                <li><NavLink to="/saved-movies" className="header__link menu__link link">Сохранённые фильмы</NavLink></li>
                            </ul>

                            <NavLink to="/profile" className="header__profile header__profile_active link">
                                <p className="header__profile-text">Аккаунт</p>
                                <img src={headerProfile} alt="Иконка профиля" className="header__profile-image" />
                            </NavLink >
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export { Navigation };