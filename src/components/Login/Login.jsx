import logo from "../../images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hooks/useValidation";

function Login(props) {

    const { data, errors, onChange, resetValidation, isFormValid } = useValidation();
    const { loggedIn, handleLogin, errorMessage, setErrorMessage } = props;

    useEffect(() => {
        setErrorMessage("");
        resetValidation({ email: "", password: "" });
    }, []);

    if (loggedIn) {
        return <Navigate to="/movies" replace />;
    }

    function handleSubmitLogin(evt) {
        evt.preventDefault();
        handleLogin(data);
    }

    return (
        <section className="auth">
            <Link to="/" className="link">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h1 className="auth__title">Рады видеть!</h1>

            <form onSubmit={handleSubmitLogin} className="auth__form" name="form-auth" method="get" noValidate>

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input onChange={onChange} value={data.email || ""} name="email" type="email" className="auth__input input" minLength="2" maxLength="30" placeholder="Введите почту" required />
                </div>
                <p className="auth__input-text-error">{errors.email || ""}</p>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input onChange={onChange} value={data.password || ""} name="password" type="password" className="auth__input auth__text-password input" minLength="5" maxLength="30" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">{errors.password || ""}</p>

                <button className="auth__form-button auth__form-button-login button">Войти</button>

                <p className="auth__info">Ещё не зарегистрированы? <span>Регистрация</span></p>
            </form>
        </section>
    )
}

export { Login };