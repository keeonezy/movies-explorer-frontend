import "./About.css";

function About() {
    return (
        <div className="about">
            <div className="about__info">
                <h2 className="about__title">О проекте</h2>
            </div>

            <div className="about__container-time">
                <div>
                    <h3 className="about__title-time">Дипломный проект включал 5 этапов</h3>
                    <p className="about__description-time">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div>
                    <h3 className="about__title-time">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__description-time">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about__container-progess">
                <div className="about__progress-l">
                    <div className="about__progess-left">
                        <p className="about__progress-text">1 неделя</p>
                    </div>
                    <p className="about__progress-name">Back-end</p>
                </div>

                <div className="about__progress-xl">
                    <div className="about__progess-right">
                        <p className="about__progress-text">4 недели</p>
                    </div>
                    <p className="about__progress-name">Front-end</p>
                </div>
            </div>
        </div >
    )
}

export { About };