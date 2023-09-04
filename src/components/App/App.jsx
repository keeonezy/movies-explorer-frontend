import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css"
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoader, setIsLoader] = React.useState(false);
  const [regedIn, setRegedIn] = React.useState(false);

  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  function tokenCheck() {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      setIsLoader(true);
      mainApi.checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log("Ошибка:" + err);
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        })
        .finally(() => setIsLoader(false));
    } else {
      setIsLoggedIn(false);
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function handleLogin(data, timeout) {
    mainApi.login(data)
      .then(() => {
        const jwt = localStorage.getItem("token");
        mainApi.getUserInfo(jwt)
          .then((res) => {
            setCurrentUser(res);
            setIsLoggedIn(true);
            if (timeout) {
              setTimeout(() => {
                navigate("/movies");
              }, timeout);
            } else {
              navigate("/movies");
            }
          })
          .catch(() => {
            setErrorMessage("На сервере произошла ошибка");
          });
      })
      .catch((err) => {
        err.then((e) => setErrorMessage(e.message));
        setIsLoggedIn(false);
      });
  }

  function handleRegister(data) {
    mainApi.register(data)
      .then(() => {
        setRegedIn(true);
        setErrorMessage(
          "Регистрация прошла успешно!"
        );
        handleLogin(data, 2000);
      })
      .catch((err) => {
        err.then((e) => setErrorMessage(e.message));
        setRegedIn(false);
      });
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("filterParam");
    localStorage.removeItem("moviesList");
    localStorage.removeItem("filterFilmList");
    setCurrentUser({});
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={< Main
              isLoggedIn={isLoggedIn}
            />}></Route>

            <Route path="/signin" element={< Login
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />}></Route>

            <Route path="/signup" element={< Register
              isLoggedIn={isLoggedIn}
              handleRegister={handleRegister}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />}></Route>

            <Route path="/profile" element={< Profile
              isLoggedIn={isLoggedIn}
              handleSignOut={handleSignOut}
            />}></Route>

            <Route path="/movies" element={< Movies
              isLoggedIn={isLoggedIn}
            />}></Route>

            <Route path="/saved-movies" element={< SavedMovies
              isLoggedIn={isLoggedIn}
            />}></Route>

            <Route path="*" element={<NotFound
              onBack={backPage}
            />}></Route>

          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
