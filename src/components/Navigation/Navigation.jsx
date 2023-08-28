import "./Navigation.css";
import logo from "../../images/logo.svg";
import headerProfile from "../../images/header-profile.svg";
import { Link, useLocation } from 'react-router-dom';

function Navigation({ loggedIn }) {
    const pathname = useLocation().pathname;

    return (
        <>
            {!loggedIn ? (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="">
                            <img src={logo} alt="" className="header__logo" />
                        </Link>
                    </div>

                    <div className="header__container-right">
                        <button className={`header__signup ${pathname === "/" ? "header__offer-button" : ""}`}>Регистрация</button>
                        <button className="header__signin">Войти</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="header__container-left">
                        <Link to="/" className="">
                            <img src={logo} alt="" className="header__logo" />
                        </Link>

                        <div className="header__navigation">
                            <a href="" className="header__link">Фильмы</a>
                            <a href="" className="header__link">Сохранённые фильмы</a>
                        </div>
                    </div>

                    < div className="header__profile">
                        <p className="header__profile-text">Аккаунт</p>
                        <img src={headerProfile} alt="" className="header__profile-image" />
                    </div >
                </>
            )}
        </>
    )
}

export { Navigation };