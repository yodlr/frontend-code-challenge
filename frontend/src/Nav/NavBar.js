import React, { useContext } from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import {Navbar} from "reactstrap";
import UserContext from "../User/UserContext";
import NavBarNoUser from "./NavBarNoUser";
import NavBarLoggedIn from "./NavBarLoggedIn";


function NavBar({ logout }) {
    const {currUser} = useContext(UserContext);
    return (
        <div>
            <Navbar >
                <NavLink exact to='/' className="navbar-brand">
                    Jobly!
                </NavLink>
                {currUser ? <NavBarLoggedIn logout={logout} /> : <NavBarNoUser />}
            </Navbar>
        </div>
    );
}

export default NavBar;