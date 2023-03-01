class Api {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  search(query) {
    return fetch(`${this.url}/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this.token}`,
      },
    }).then(this.getResponse);
  }
  
  getPhoto(id) {
    return fetch(`${this.url}/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${this.token}`,
      },
    }).then(this.getResponse);
  }
}

const config = {
  url: "https://api.unsplash.com",
  token: "XYXbyWcoz38Vl-6QU9_JiiwrlZ5PW3U4hALirugp52U",
};

const api = new Api(config);

export default api;
