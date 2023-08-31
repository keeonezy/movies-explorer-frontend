import "./Header.css";
import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

function Header({ loggedIn }) {
    const pathname = useLocation().pathname;

    return (
        <header className={`header ${pathname === "/" ? "header_offer-change" : ""}`}>
            <div className="header__container">
                <Navigation loggedIn={loggedIn} />
            </div>
        </header>
    )
}

export { Header };