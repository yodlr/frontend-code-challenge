//jobly-demo-app-frontend.surge.sh
import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './AppRoutes';
import NavBar from './Nav/NavBar';
import JoblyApi from './JoblyAPI';
import jwt from "jsonwebtoken"
import UserContext from './User/UserContext';
import useLocalStorage from './hooks/useLocalStorage';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID, null);
  const [currUser, setCurrUser] = useState(null);

  useEffect(function getCurrUser() {
    async function getCurrUserAPICall() {
      if (token) {
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let userInfo = await JoblyApi.getUserInfo(username);
          setCurrUser(userInfo.user);
        } catch (err) {
          console.error('App problem loading userInfo:', err);
          setCurrUser(null);
        }
      }
    }
    getCurrUserAPICall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function signUpUser(userInfoObj) {
    try {
      let newUser = await JoblyApi.registerNewUser(userInfoObj);
      setToken(newUser.token);
      JoblyApi.token = newUser.token;
    } catch (err) {
      console.error('App problem with SignUp:', err);
    }
  }

  async function loginUser(userInfoObj) {
    try {
      let newUser = await JoblyApi.loginExistingUser(userInfoObj);
      setToken(newUser.token);
      JoblyApi.token = newUser.token;
    } catch (err) {
      console.error('App problem with Login:', err);
    }
  }

  async function updateUser(username, userInfoObj) {
    try {
      await JoblyApi.editUserInfo(username, userInfoObj);
      let updateTokenObj = {username: username, password: userInfoObj.password}
      await loginUser(updateTokenObj);
    } catch (err) {
      console.error('App problem with Edit User:', err);
    }
  }

  function alreadyApplied(jobId) {
    return currUser.applications.includes(jobId);
  }

  async function applyToJob(jobId) {
    try {
      if (alreadyApplied()) return;
      let applySuccess = await JoblyApi.userApplyToJob(currUser.username, jobId);
      console.debug(applySuccess);
      setCurrUser({...currUser, applications: [...currUser.applications, jobId]})
      return applySuccess
    } catch (err) {
        console.error(err);
    }
}

  function logout() {
    setCurrUser(null);
    setToken(null);
  }

  return (
    <div className="App" style={{height:'100vh', backgroundColor:'#A3E4D7'}}>
      <UserContext.Provider value={{currUser, applyToJob, alreadyApplied}}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <Routes signUpUser={signUpUser} loginUser={loginUser} updateUser={updateUser}/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
