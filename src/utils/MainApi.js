import { API_URL } from "./constants";

class MainApi {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
        this.headersWithToken = { ...headers, Authorization: null };
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

    // Токен
    setToken = (token) => this.headersWithToken = { ...this.headersWithToken, Authorization: `Bearer ${token}` }

    register(userData) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(userData),
        })
            .then(this._checkResponse);
    }

    login(userData) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(userData),
        })
            .then(this._checkResponse);
    }

    getUser() {
        return this._request(`${this.url}/users/me`, {
            headers: this.headersWithToken,
        })
    }

    getMovies() {
        return this._request(`${this.url}/movies`, {
            headers: this.headersWithToken,
        })
    }

    patchUser(userData) {
        return this._request(`${this.url}/users/me`, {
            method: "PATCH",
            headers: this.headersWithToken,
            body: JSON.stringify(userData),
        })
    }

    postMovie(movie) {
        return this._request(`${this.url}/movies`, {
            method: "POST",
            headers: this.headersWithToken,
            body: JSON.stringify(movie),
        })
    }

    deleteMovie(movieId) {
        return this._request(`${this.url}/movies/${movieId}`, {
            method: "DELETE",
            headers: this.headersWithToken,
        })
    }
}

const mainApi = new MainApi({
    url: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default mainApi;