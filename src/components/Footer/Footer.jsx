import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                </div>

                <div className="footer__navigation">
                    <p className="footer__year">© 2023</p>
                    <nav className="footer__container-links">
                        <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link link">Яндекс.Практикум</a>
                        <a href="https://github.com/keeonezy" target="_blank" className="footer__link link">Github</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export { Footer };