import "./Header.css";
import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

function Header() {
    const pathname = useLocation().pathname;

    return (
        <header className={`header ${pathname === "/" ? "header__offer" : ""}`}>
            <div className="header__container">
                <Navigation />
            </div>
        </header>
    )
}

export { Header };