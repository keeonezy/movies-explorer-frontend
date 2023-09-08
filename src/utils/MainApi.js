import { API_URL, MOVIES_URL } from "./constants";

class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  // Проверяем на ошибку
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  register(data) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name: data.name, email: data.email, password: data.password })
    })
      .then(res => this._checkResponse(res))
  }

  login(data) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email: data.email, password: data.password })
    })
      .then(res => this._checkResponse(res))
      .then(res => { localStorage.setItem("token", res.token) })
  }

  checkToken(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` }
    })
      .then(res => this._checkResponse(res))
  }

  getUserInfo(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` }
    })
      .then(res => this._checkResponse(res))
  }

  updateUserInfo(data, jwt) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` },
      body: JSON.stringify({ name: data.name, email: data.email })
    })
      .then(res => this._checkResponse(res))
  }

  getSavedMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      method: "GET",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` }
    })
      .then(res => this._checkResponse(res))
  }

  postSaveMovie(movie, jwt) {
    return fetch(`${this.url}/movies`, {
      method: "POST",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id
      })
    })
      .then(res => this._checkResponse(res))
  }

  deleteSavedMovie(movieId, jwt) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: { ...this.headers, "Authorization": `Bearer ${jwt}` }
    })
      .then(res => this._checkResponse(res))
  }
}

const mainApi = new MainApi({
  url: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;