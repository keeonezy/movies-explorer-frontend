import React from "react";
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
import ProtectedRoute from "../../hooks/protectedRoute";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoader, setIsLoader] = React.useState(false);
  const [regedIn, setRegedIn] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

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

  function handleLogin(values, timeout) {
    mainApi.login(values)
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

  function handleRegister(values) {
    mainApi.register(values)
      .then(() => {
        setRegedIn(true);
        setErrorMessage(
          "Регистрация прошла успешно!"
        );
        handleLogin(values, 2000);
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

  function handleUpdateUser(values) {
    const jwt = localStorage.getItem("token");
    mainApi.updateUserInfo(values, jwt)
      .then((res) => {
        setErrorMessage("Данные успешно изменены");
        setCurrentUser(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }

  function handleSaveMovieSavedList(movie) {
    const jwt = localStorage.getItem("token");
    mainApi.postSaveMovie(movie, jwt)
      .then((userMovie) => {
        setSavedMovies([...savedMovies, userMovie]);
      })
      .catch((err) => console.log(err))
  }


  function handleDeleteMovieSavedList(movie) {
    const jwt = localStorage.getItem("token");
    const movieToDelete = savedMovies.find(
      (m) => movie.id === m.movieId || movie.movieId === m.movieId
    );
    mainApi.deleteSavedMovie(movieToDelete._id, jwt)
      .then((removedMovie) => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== removedMovie._id)
        );
      })
      .catch((err) => console.log(err))
  }

  function requestSavedMovies() {
    const jwt = localStorage.getItem("token");
    setIsLoader(true);
    mainApi.getSavedMovies(jwt)
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  function requestAllMovies() {
    setIsLoader(true);
    moviesApi.getMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      requestAllMovies();
      requestSavedMovies();
    }
  }, [isLoggedIn]);

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
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              handleLogin={handleLogin}
            />}></Route>

            <Route path="/signup" element={< Register
              isLoggedIn={isLoggedIn}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              handleRegister={handleRegister}
            />}></Route>

            <Route path="/profile" element={< ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              handleSignOut={handleSignOut}
              handleUpdateUser={handleUpdateUser}
            />}></Route>

            <Route path="/movies" element={< ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              isLoader={isLoader}
              allMovies={allMovies}
              handleSaveMovieSavedList={handleSaveMovieSavedList}
              savedMovies={savedMovies}
              handleDeleteMovieSavedList={handleDeleteMovieSavedList}
            />}></Route>

            <Route path="/saved-movies" element={< ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              isLoader={isLoader}
              handleSaveMovieSavedList={handleSaveMovieSavedList}
              savedMovies={savedMovies}
              handleDeleteMovieSavedList={handleDeleteMovieSavedList}
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
