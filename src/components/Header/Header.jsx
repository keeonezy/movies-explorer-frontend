import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <img src={logo} alt="" className="header__logo" />

                <div className="header__container-right">
                    <button className="header__signup">Регистрация</button>
                    <button className="header__signin">Войти</button>
                </div>
            </div>
        </div>
    )
}

export { Header };