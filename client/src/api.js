import axios from 'axios';


class API {
  constructor(baseURL = 'http://localhost:3003') {
    this.baseURL = baseURL;
  }

  async makeRequest(endpoint, method = 'GET', data = null) {
    const url = `${this.baseURL}/${endpoint}`;
    console.log(url)

    try {
      const response = await axios({ method, url, data });

      return response.data;
    } catch (error) {
      // Handle error appropriately
      console.error('Request Error:', error);
      throw error;
    }
  }

  async test() {
    const resp = this.makeRequest('users/test');
    return resp;
  }

  async getAllUsers() {
    const resp = this.makeRequest('users/');
    return resp;
  }

  async RegisterNewUser(data) {
    const submitData = {...data, 'state':'pending'}
    console.log(submitData)
    const resp = this.makeRequest('users/', 'POST', submitData);
    return resp;
  }
}

const api = new API();

export default api;
