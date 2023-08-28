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
                    <div className="footer__container-links">
                        <a href="#" className="footer__link">Яндекс.Практикум</a>
                        <a href="#" className="footer__link">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer };