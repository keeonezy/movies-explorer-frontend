import "./Main.css";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { Student } from "../Student/Student";

function Main() {
    return (
        <div className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <Student />
        </div>
    )
}

export { Main };