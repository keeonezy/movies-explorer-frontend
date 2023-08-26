import "./Techs.css";

function Techs() {
    return (
        <div className="techs">
            <div className="techs__container">
                <div className="techs__info">
                    <h2 className="techs__title">Технологии</h2>
                </div>

                <h3 className="techs__title-info">7 технологий</h3>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <ul className="techs__elements">
                    <li className="techs__element">
                        <p className="techs__element-desc">HTML</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">CSS</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">JS</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">React</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">Git</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">Express.js</p>
                    </li>

                    <li className="techs__element">
                        <p className="techs__element-desc">mongoDB</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Techs };