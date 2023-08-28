import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
    return (
        <div className="auth">
            <img src={logo} alt="" className="header__logo" />
            <h2 className="auth__title">Добро пожаловать!</h2>

            <form className="auth__form" name='form-auth' method="get">
                <p className="auth__input-name">Имя</p>
                <div className="auth__input-design">
                    <input type="text" className="auth__input" placeholder="Введите имя" required />
                </div>

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input type="email" className="auth__input" placeholder="Введите почту" required />
                </div>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input type="password" className="auth__input auth__text-password" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">Что-то пошло не так...</p>

                <button className="auth__form-button">Зарегистрироваться</button>

                <p className="auth__info">Уже зарегистрированы? <span>Войти</span></p>
            </form>
        </div>
    )
}

export { Register };