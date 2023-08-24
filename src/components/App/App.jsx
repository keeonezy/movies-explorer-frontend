import "./App.css"
import { Header } from "../Header/Header";
import { Offer } from "../Offer/Offer";
import { About } from "../About/About";
import { Instruments } from "../Instruments/Instruments";
import { Student } from "../Student/Student";

function App() {
  return (
    <div className="body">
      <Header />
      <Offer />
      <About />
      <Instruments />
      <Student />
    </div>
  );
}

export default App;
