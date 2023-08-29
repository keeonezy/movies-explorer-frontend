import "./AboutProject.css";

function AboutProject() {
    return (
        <div className="about-project" id="about-project">
            <div className="about-project__info">
                <h2 className="about-project__title">О проекте</h2>
            </div>

            <div className="about-project__container-time">
                <div>
                    <h3 className="about-project__title-time">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description-time">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div>
                    <h3 className="about-project__title-time">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description-time">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-project__container-progess">
                <div className="about-project__progress-l">
                    <div className="about-project__progess-left">
                        <p className="about-project__progress-text">1 неделя</p>
                    </div>
                    <p className="about-project__progress-name">Back-end</p>
                </div>

                <div className="about-project__progress-xl">
                    <div className="about-project__progess-right">
                        <p className="about-project__progress-text">4 недели</p>
                    </div>
                    <p className="about-project__progress-name">Front-end</p>
                </div>
            </div>
        </div >
    )
}

export { AboutProject };