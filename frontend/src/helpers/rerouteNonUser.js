import { useHistory } from 'react-router-dom';
import React, { useContext } from "react";
import UserContext from "./UserContext";


let history = useHistory();
const {currUser} = useContext(UserContext);

if (!currUser) history.push('/');



