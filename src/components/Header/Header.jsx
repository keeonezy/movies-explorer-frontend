import "./Header.css";
import logo from "../../images/logo.svg";
import headerProfile from "../../images/header-profile.svg";
import headerMenu from "../../images/header-menu.svg";

function Header() {
    return (
        <div className="header">
            {/* <div className="header header__offer"> */}
            <div className="header__container">
                <div className="header__container-left">
                    <img src={logo} alt="" className="header__logo" />

                    <div className="header__navigation">
                        <a href="" className="header__link">Фильмы</a>
                        <a href="" className="header__link">Сохранённые фильмы</a>
                    </div>
                </div>

                {/* <div className="header__container-right">
                    <button className="header__signup header__offer-button">Регистрация</button>
                    <button className="header__signin">Войти</button>
                </div> */}
                <div className="header__profile">
                    <p className="header__profile-text">Аккаунт</p>
                    <img src={headerProfile} alt="" className="header__profile-image" />
                </div>

                <img src={headerMenu} alt="" className="header__menu" />
            </div>
        </div>
    )
}

export { Header };