import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./App.css"
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={< Main isLoggedIn={isLoggedIn} />}></Route>
            <Route path="/signin" element={< Login />}></Route>
            <Route path="/signup" element={< Register />}></Route>
            <Route path="/profile" element={< Profile isLoggedIn={isLoggedIn} />}></Route>
            <Route path="/movies" element={< Movies isLoggedIn={isLoggedIn} />}></Route>
            <Route path="/saved-movies" element={< SavedMovies isLoggedIn={isLoggedIn} />}></Route>
            <Route path="*" element={<NotFound onBack={backPage} />}></Route>
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
