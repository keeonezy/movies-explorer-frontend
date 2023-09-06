import "./Profile.css";
import { Header } from "../Header/Header";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useValidation from "../../hooks/useValidation";

function Profile(props) {

    const { formValues, handleFormChange, formErrors, isFormValid, resetForm } = useValidation();

    const { handleUpdateUser, handleSignOut, isLoggedIn, isLoader } = props;

    const currentUser = React.useContext(CurrentUserContext);

    const [isDisabled, setIsDisabled] = React.useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (
            formValues.name !== currentUser.name ||
            formValues.email !== currentUser.email
        ) {
            handleUpdateUser({
                name: formValues.name,
                email: formValues.email,
            });
        }
        setIsDisabled(true);
    };

    React.useEffect(() => {
    }, []);

    React.useEffect(() => {
        if (!isLoader) {
            resetForm({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [currentUser.email, currentUser.name, isLoader, resetForm]);

    const toggleFormEditState = () => {
        setIsDisabled(!isDisabled);
    };

    const submitButtonClass = `profile__button-save  ${isDisabled ? "profile__button-save-disabled" : ""
        } ${!isFormValid || isLoader ? "profile__button-save-inactive" : ""}`;

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>

                <form className="profile__form" onSubmit={handleFormSubmit}>
                    <fieldset className="profile__data">
                        <label className="profile__input-label">Имя</label>
                        <input disabled={isDisabled} value={formValues.name || ""} onChange={handleFormChange} name="name" type="text" className="profile__input input" placeholder="Введите имя" required />
                    </fieldset>
                    <p className="profile__text-error">{formErrors.name}</p>

                    <fieldset className="profile__data">
                        <label className="profile__input-label">E-mail</label>
                        <input disabled={isDisabled} value={formValues.email || ""} onChange={handleFormChange} name="email" type="text" className="profile__input input" placeholder="Введите почту" required />
                    </fieldset>
                    <p className="profile__text-error">{formErrors.email}</p>

                    <button onClick={toggleFormEditState} className="profile__button-edit button" type="button">{isDisabled ? "Редактировать" : "Отменить"}</button>
                    <button onClick={handleSignOut} className="profile__button-exit button" type="button">Выйти из аккаунта</button>
                    {/* <p className="profile__text-error">{isResOk ? "Данные успешно обновлены!" : "Попробуйте еще раз."}</p> */}
                    <button disabled={!isFormValid || isLoader || isDisabled} className={submitButtonClass} type="submit">Сохранить</button>
                </form>

            </section>
        </>
    )
}

export { Profile };