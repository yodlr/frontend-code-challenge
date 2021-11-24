import React from "react";
import { useContext } from "react";
import UserContext from './User/UserContext';
import NoUserLinks from "./NoUserLinks";

function Home() {
    const { currUser } = useContext(UserContext);
    
    return (
        <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place!</p>
            {currUser ? <h3>{`Welcome, ${currUser.username}`}</h3> : <NoUserLinks />}
        </div>
    )
}

export default Home;