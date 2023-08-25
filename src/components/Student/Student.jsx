import "./Student.css";
import studentAvatar from "../../images/avatarStudent.jpg";
import studentArrow from "../..//images/student-arrow.svg"

function Student() {
    return (
        <div className="student">
            <div className="student__info">
                <h2 className="student__title">Студент</h2>
            </div>

            <div className="student__container">
                <div className="student__container-left">
                    <h3 className="student__title-info">Александр</h3>
                    <p className="student__description-info">Фронтенд-разработчик, 24 года</p>
                    <p className="student__description">Я родился в Оренбурге, закончил факультет экономики ОГУ. Я люблю слушать музыку. Отдыхать от суеты люблю в кино. Начать изучать фронтенд разработку в 2022 году. Уже прошел 1 год с того момента, я получил новые навыки. Теперь их использую</p>
                    <button className="student__button">Github</button>
                </div>
                <img src={studentAvatar} alt="" className="student__image" />
            </div>

            <h3 className="student__title-portfolio">Портфолио</h3>

            <div>
                <div className="student__portfolio">
                    <p className="student-portfolio-description">Статичный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </div>
                <div className="student__portfolio">
                    <p className="student-portfolio-description">Адаптивный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </div>
                <div className="student__portfolio">
                    <p className="student-portfolio-description">Одностраничное приложение</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </div>
            </div>

        </div>
    )
}

export { Student };