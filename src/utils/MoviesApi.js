import { MOVIES_URL } from "./constants";

class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }
    // Проверяем на ошибку
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Проверяем promise
    _request(url, options) {
        return this._request(url, options).then(this._checkResponse)
    }

    getMovies() {
        return this._request(`${this._url}/beatfilm-movies`, {
            method: "GET",
            headers: this._headers,
        })
    }
}

const moviesApi = new MoviesApi({
    url: MOVIES_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default moviesApi;