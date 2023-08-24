import "./Instruments.css";

function Instruments() {
    return (
        <div className="instruments">
            <div className="instruments__container">
                <div className="instruments__info">
                    <h2 className="instruments__title">Технологии</h2>
                </div>

                <h3 className="instruments__title-info">7 технологий</h3>
                <p className="instruments__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <ul className="instruments__elements">
                    <li className="instruments__element">
                        <p className="instruments__element-desc">HTML</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">CSS</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">JS</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">React</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">Git</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">Express.js</p>
                    </li>

                    <li className="instruments__element">
                        <p className="instruments__element-desc">mongoDB</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Instruments };