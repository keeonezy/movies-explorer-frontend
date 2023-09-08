import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }
  // Проверяем на ошибку
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
    })
      .then(res => this._checkResponse(res))
  }
}

const moviesApi = new MoviesApi({
  url: MOVIES_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;