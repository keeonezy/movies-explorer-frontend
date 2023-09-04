import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hooks/useValidation";

function Register(props) {

    const { data, errors, onChange, resetValidation, isFormValid } =
        useValidation();
    const {
        loggedIn,
        handleRegister,
        errorMessage,
        setErrorMessage,
    } = props;

    useEffect(() => {
        setErrorMessage("");
        resetValidation({ name: "", email: "", password: "" });
    }, []);

    if (loggedIn) {
        return <Navigate to="/movies" replace />;
    }

    function handleSubmitRegister(evt) {
        evt.preventDefault();
        handleRegister(data);
    }

    return (
        <section className="auth">
            <Link to="/" className="link">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>

            <form onSubmit={handleSubmitRegister} isFormValid={isFormValid} param="reg" className="auth__form" name="form-auth" method="get" noValidate>
                <p className="auth__input-name">Имя</p>
                <div className="auth__input-design">
                    <input onChange={onChange} value={data.name || ""} name="name" type="text" className="auth__input input" minLength="2" maxLength="30" placeholder="Введите имя" required />
                </div>
                <p className="auth__input-text-error">{errors.name || ""}</p>

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input onChange={onChange} value={data.email || ""} name="email" type="email" className="auth__input input" minLength="5" maxLength="30" placeholder="Введите почту" required />
                </div>
                <p className="auth__input-text-error">{errors.email || ""}</p>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input onChange={onChange} value={data.password || ""} name="password" type="password" className="auth__input auth__text-password input auth__input-error" minLength="5" maxLength="30" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">{errors.password || ""}</p>

                <button className="auth__form-button button">Зарегистрироваться</button>

                <p className="auth__info">Уже зарегистрированы? <span>Войти</span></p>
            </form>
        </section>
    )
}

export { Register };