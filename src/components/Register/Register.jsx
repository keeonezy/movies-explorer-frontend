import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
    return (
        <section className="auth">
            <Link to="/" className="link">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h2 className="auth__title">Добро пожаловать!</h2>

            <form className="auth__form" name="form-auth" method="get" noValidate>
                <p className="auth__input-name">Имя</p>
                <div className="auth__input-design">
                    <input type="text" className="auth__input input" minLength="2" maxLength="30" placeholder="Введите имя" required />
                </div>

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input type="email" className="auth__input input" minLength="5" maxLength="30" placeholder="Введите почту" required />
                </div>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input type="password" className="auth__input auth__text-password input auth__input-error" minLength="5" maxLength="30" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">Что-то пошло не так...</p>

                <button className="auth__form-button button">Зарегистрироваться</button>

                <p className="auth__info">Уже зарегистрированы? <span>Войти</span></p>
            </form>
        </section>
    )
}

export { Register };