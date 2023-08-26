import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
    return (
        <div className="register">
            <img src={logo} alt="" className="header__logo" />
            <h2 className="register__title">Добро пожаловать!</h2>

            <form className="register__form" name='form-register' method="get">
                <p className="register__input-name">Имя</p>
                <div className="register__input-design">
                    <input type="text" className="register__input" placeholder="Введите имя" required />
                </div>

                <p className="register__input-name">E-mail</p>
                <div className="register__input-design">
                    <input type="email" className="register__input" placeholder="Введите почту" required />
                </div>

                <p className="register__input-name">Пароль</p>
                <div className="register__input-design">
                    <input type="password" className="register__input register__text-password" placeholder="Введите почту" required />
                </div>
                <p className="register__input-text-error">Что-то пошло не так...</p>

                <button className="register__form-button">Зарегистрироваться</button>

                <p className="register__info">Уже зарегистрированы? <span>Войти</span></p>
            </form>
        </div>
    )
}

export { Register };