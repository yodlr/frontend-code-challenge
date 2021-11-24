import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(filter) {
    let res
    filter ? res = await this.request('companies/', filter) : res = await this.request('companies/');
    return res.companies;
  }

  static async getJobs(filter) {
    let res
    filter ? res = await this.request('jobs/', filter) : res = await this.request('jobs/');
    return res.jobs;
  }

  static async registerNewUser(userInfo) {
    let res = await this.request('auth/register', userInfo, 'post');
    return res
  }

  static async loginExistingUser(userInfo) {
    let res = await this.request('auth/token', userInfo, 'post');
    return res
  }

  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res
  }

  static async editUserInfo(username, updatedInfo) {
    let res = await this.request(`users/${username}`, updatedInfo, 'patch');
    return res
  }

  static async userApplyToJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {},'post');
    return res
  }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;