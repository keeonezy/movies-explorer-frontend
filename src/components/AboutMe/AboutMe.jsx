import "./AboutMe.css";
import studentAvatar from "../../images/avatarStudent.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__info">
                <h2 className="about-me__title">Студент</h2>
            </div>

            <div className="about-me__container">
                <div className="about-me__container-left">
                    <h3 className="about-me__title-info">Александр</h3>
                    <p className="about-me__description-info">Фронтенд-разработчик, 24 года</p>
                    <p className="about-me__description">Закончил университетский колледж ОГУ. Я люблю слушать музыку. Отдыхать от суеты люблю в кино. В свободное время кататься на велосипеде или самокате. Начать изучать фронтенд разработку в 2022 году. Уже прошел 1 год с того момента, я получил новые навыки. Теперь их использую для реализации веб сайтов</p>
                    <a href="https://github.com/keeonezy" target="_black" className="about-me__button link">Github</a>
                </div>
                <img src={studentAvatar} alt="Студент" className="about-me__image" />
            </div>
        </section>
    )
}

export { AboutMe };