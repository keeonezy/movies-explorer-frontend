import { API_URL } from "./constants";

class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
        this._headersWithToken = { ...headers, Authorization: null };
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


    setToken = (token) => this._headersWithToken = { ...this._headersWithToken, Authorization: `Bearer ${token}` }


    registerUser(userData) {
        return this._request(`${this._url}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userData),
        })
    }


    loginUser(userData) {
        return this._request(`${this._url}/signin`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userData),
        })
    }

    getUser() {
        return this._request(`${this._url}/users/me`, {
            headers: this._headersWithToken,
        })
    }

    getMovies() {
        return this._request(`${this._url}/movies`, {
            headers: this._headersWithToken,
        })

    }

    patchUser(userData) {
        return this._request(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headersWithToken,
            body: JSON.stringify(userData),
        })
    }


    postMovie(movie) {
        return this._request(`${this._url}/movies`, {
            method: "POST",
            headers: this._headersWithToken,
            body: JSON.stringify(movie),
        })
    }

    deleteMovie(movieId) {
        return this._request(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: this._headersWithToken,
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