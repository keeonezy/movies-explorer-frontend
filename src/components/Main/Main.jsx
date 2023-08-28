import "./Main.css";
import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { Student } from "../Student/Student";
import { Footer } from "../Footer/Footer";

function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <Student />
            </main>
            <Footer />
        </>
    )
}

export { Main };