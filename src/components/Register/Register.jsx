import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useValidation from "../../hooks/useValidation";

function Register(props) {

    const { formValues, handleFormChange, formErrors, isFormValid, resetForm } = useValidation();

    const { isLoggedIn, handleRegister } = props;

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) resetForm();
    }, [isLoggedIn, resetForm]);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/movies", { replace: true });
        }
    }, [navigate, isLoggedIn]);

    function handleSubmitRegister(evt) {
        evt.preventDefault();
        handleRegister(formValues);
    }

    return (
        <section className="auth">
            <Link to="/" className="link">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>

            <form onSubmit={handleSubmitRegister} param="reg" className="auth__form" name="form-auth">
                <p className="auth__input-name">Имя</p>
                <div className="auth__input-design">
                    <input onChange={handleFormChange} value={formValues.name || ""} name="name" type="text" className="auth__input input" minLength="2" maxLength="30" placeholder="Введите имя" required />
                </div>
                <p className="auth__input-text-error">{formErrors.name || ""}</p>

                <p className="auth__input-name">E-mail</p>
                <div className="auth__input-design">
                    <input onChange={handleFormChange} value={formValues.email || ""} name="email" type="email" className="auth__input input" minLength="5" maxLength="30" placeholder="Введите почту" required />
                </div>
                <p className="auth__input-text-error">{formErrors.email || ""}</p>

                <p className="auth__input-name">Пароль</p>
                <div className="auth__input-design">
                    <input onChange={handleFormChange} value={formValues.password || ""} name="password" type="password" className="auth__input auth__text-password input auth__input-error" minLength="5" maxLength="30" placeholder="Введите пароль" required />
                </div>
                <p className="auth__input-text-error">{formErrors.password || ""}</p>

                <button disabled={!isFormValid} className={`auth__form-button button ${!isFormValid && "auth__form-button-disabled"}`}>Зарегистрироваться</button>

                <p className="auth__info">Уже зарегистрированы? <Link to="/signin" className="link">Войти</Link></p>
            </form>
        </section>
    )
}

export { Register };