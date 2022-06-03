class API {
  constructor() {
    this.url = "https://snetmyapp.herokuapp.com";
  }

  async getOffers(param, signal) {
    const fetchData = await fetch(`${this.url}/${param}`, {
      method: "GET",
      signal,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return fetchData.json();
  }
}

export default API;
