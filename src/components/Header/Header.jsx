import "./Header.css";
import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
    const pathname = useLocation().pathname;

    return (
        <header className={`header ${pathname === "/" ? "header_offer" : ""}`}>
            <div className="header__container">
                <Navigation isLoggedIn={isLoggedIn} />
            </div>
        </header>
    )
}

export { Header };