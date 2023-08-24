import "./App.css"
import { Header } from "../Header/Header";
import { Offer } from "../Offer/Offer";
import { About } from "../About/About";

function App() {
  return (
    <div className="body">
      <Header />
      <Offer />
      <About />
    </div>
  );
}

export default App;
