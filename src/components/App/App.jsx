import "./App.css"
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

function App() {
  return (
    <div className="body">
      <div className="page">
        {/* <Header /> */}
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <NotFound /> */}
        {/* <Register /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
