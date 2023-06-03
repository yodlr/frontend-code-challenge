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
    const resp = await this.makeRequest('users/test');
    return resp;
  }

  async getAllUsers() {
    const resp = await this.makeRequest('users/');
    return resp;
  }

  async registerNewUser(data) {
    const submitData = { ...data, 'state':'pending' }
    const resp = await this.makeRequest('users/', 'POST', submitData);
    return resp;
  }

  async deleteUser(id) {
    const resp = await this.makeRequest(`users/${id}`, 'DELETE')
    console.log(resp)
    return resp
  }

  async approveUser(data) {
    const submitData = { ...data, 'state': 'active' }
    const id = data.id
    const resp = await this.makeRequest(`users/${id}`, 'PUT', submitData);
    return resp;
  }

  async getUserById(id) {
    const resp = await this.makeRequest(`users/${id}`, 'GET')
    console.log(resp)
    return resp
  }

}

const api = new API();

export default api;
