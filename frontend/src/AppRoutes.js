import React, { useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import UserContext from "./User/UserContext";
import Profile from './User/Profile';
import CompanyList from './Company/CompanyList';
import CompanyDetails from './Company/CompanyDetails';
import JobsList from './Jobs/JobsList';
import UserSignUpForm from './User/UserSignUpForm';
import UserLoginForm from './User/UserLoginForm';
import Home from './home';

function Routes({signUpUser, loginUser, updateUser}) {
    const {currUser} = useContext(UserContext);
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/companies">{currUser ? <CompanyList /> : <Redirect to="/" />}</Route>
            <Route exact path="/companies/:handle">{currUser ? <CompanyDetails /> : <Redirect to="/" />}</Route>
            <Route exact path="/jobs">{currUser ? <JobsList /> : <Redirect to="/" />}</Route>
            <Route exact path="/login"><UserLoginForm loginUser={loginUser}/></Route>
            <Route exact path="/signup"><UserSignUpForm signUpUser={signUpUser}/></Route>
            <Route exact path="/profile">{currUser ? <Profile updateUser={updateUser} /> : <Redirect to="/" />}</Route>
            <Redirect to="/" />
        </Switch> 
    )
}

export default Routes;