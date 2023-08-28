import "./Profile.css";
import { Header } from "../Header/Header";

function Profile() {
    return (
        <>
            <Header />
            <div className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>

                <form className="profile__form">
                    <fieldset className="profile__data">
                        <label htmlFor="" className="profile__input-label">Имя</label>
                        <input type="text" className="profile__input" />
                    </fieldset>

                    <fieldset className="profile__data">
                        <label htmlFor="" className="profile__input-label">E-mail</label>
                        <input type="text" className="profile__input" />
                    </fieldset>
                </form>

                <button className="profile__button-edit">Редактировать</button>
                <button className="profile__button-exit">Выйти из аккаунта</button>
            </div>
        </>
    )
}

export { Profile };