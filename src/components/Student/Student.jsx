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
                    <a href="https://github.com/keeonezy" target="_black" className="student__button link">Github</a>
                </div>
                <img src={studentAvatar} alt="Студент" className="student__image" />
            </div>

            <h3 className="student__title-portfolio">Портфолио</h3>

            <div>
                <a className="student__portfolio link" href="https://keeonezy.github.io/how-to-learn/index.html" target="_black">
                    <p className="student-portfolio-description">Статичный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </a>
                <a className="student__portfolio link" href="https://keeonezy.github.io/russian-travel/index.html" target="_black">
                    <p className="student-portfolio-description">Адаптивный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </a>
                <a className="student__portfolio link" href="https://keeonezy.github.io/mesto-react/index.html" target="_black">
                    <p className="student-portfolio-description">Одностраничное приложение</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="student__arrow" />
                </a>
            </div>

        </div>
    )
}

export { Student };