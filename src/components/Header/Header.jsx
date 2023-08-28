import "./Header.css";
import { useLocation } from 'react-router-dom';
import { Navigation } from "../Navigation/Navigation";
import headerMenu from "../../images/header-menu.svg";

function Header() {
    const pathname = useLocation().pathname;

    return (
        <header className={`header ${pathname === "/" ? "header__offer" : ""}`}>
            <div className="header__container">
                <Navigation />
                <img src={headerMenu} alt="" className="header__menu" />
            </div>
        </header>
    )
}

export { Header };