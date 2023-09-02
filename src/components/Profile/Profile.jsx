import "./Profile.css";
import { Header } from "../Header/Header";

function Profile({ isLoggedIn }) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>

                <form className="profile__form">
                    <fieldset className="profile__data">
                        <label className="profile__input-label">Имя</label>
                        <input type="text" className="profile__input input" placeholder="Введите имя" />
                    </fieldset>

                    <fieldset className="profile__data">
                        <label className="profile__input-label">E-mail</label>
                        <input type="text" className="profile__input input" placeholder="Введите почту" />
                    </fieldset>
                </form>

                <button className="profile__button-edit button">Редактировать</button>
                <button className="profile__button-exit button">Выйти из аккаунта</button>
                <p className="profile__text-error">При обновлении профиля произошла ошибка.</p>
                <button className="profile__button-save button">Сохранить</button>
            </section>
        </>
    )
}

export { Profile };