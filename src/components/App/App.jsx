import "./App.css"
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <NotFound /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Profile /> */}
        <SavedMovies />
      </div>
    </div>
  );
}

export default App;
