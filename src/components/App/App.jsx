import "./App.css"
import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { Student } from "../Student/Student";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="body">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
      <Footer />
    </div>
  );
}

export default App;
