import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hooks/useValidation";

function Login(props) {

    const { formValues, handleFormChange, formErrors, isFormValid, resetForm } = useValidation();

    const { isLoggedIn, handleLogin, errorMessage } = props;

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) resetForm();
    }, [isLoggedIn, resetForm]);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/movies", { replace: true });
        }
    }, [navigate, isLoggedIn]);

    function handleSubmitLogin(evt) {
        evt.preventDefault();
        handleLogin(formValues);
    }

    return (
        <section className="auth">
            <Link to="/" className="link">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h1 className="auth__title">Рады видеть!</h1>

            <form onSubmit={handleSubmitLogin} className="auth__form" name="form-auth">

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input onChange={handleFormChange} value={formValues.email || ""} pattern="^\S+@\S+\.\S+$" name="email" type="email" className={`auth__input input ${formErrors.email ? "auth__input-error" : ""}`} maxLength="30" placeholder="Введите почту" required />
                </div>
                <p className="auth__input-text-error">{formErrors.email || ""}</p>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input onChange={handleFormChange} value={formValues.password || ""} name="password" type="password" className={`auth__input input ${formErrors.password ? "auth__input-error" : ""}`} minLength="5" maxLength="30" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">{formErrors.password || ""}</p>
                <p className="auth__input-text-error">{errorMessage || ""}</p>

                <button disabled={!isFormValid} className={`auth__form-button auth__form-button-login button ${!isFormValid && "auth__form-button-disabled"}`}>Войти</button>

                <p className="auth__info">Ещё не зарегистрированы? <Link to="/signup" className="link">Регистрация</Link></p>
            </form>
        </section>
    )
}

export { Login };