import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
    return (
        <div className="header header__offer">
            <div className="header__container">
                <img src={logo} alt="" className="header__logo" />

                <div className="header__container-right">
                    <button className="header__signup header__offer-button">Регистрация</button>
                    <button className="header__signin">Войти</button>
                </div>
            </div>
        </div>
    )
}

export { Header };