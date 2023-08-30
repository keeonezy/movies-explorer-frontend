import "./Portfolio.css";
import studentArrow from "../..//images/student-arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title-portfolio">Портфолио</h3>

            <div>
                <a className="portfolio__link link" href="https://keeonezy.github.io/how-to-learn/index.html" target="_black">
                    <p className="portfolio-portfolio-description">Статичный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="portfolio__arrow" />
                </a>
                <a className="portfolio__link link" href="https://keeonezy.github.io/russian-travel/index.html" target="_black">
                    <p className="portfolio-portfolio-description">Адаптивный сайт</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="portfolio__arrow" />
                </a>
                <a className="portfolio__link link" href="https://keeonezy.github.io/mesto-react/index.html" target="_black">
                    <p className="portfolio-portfolio-description">Одностраничное приложение</p>
                    <img src={studentArrow} alt="Стрелка для перехода" className="portfolio__arrow" />
                </a>
            </div>

        </section>
    )
}

export { Portfolio };