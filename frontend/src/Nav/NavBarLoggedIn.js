import React, {useContext} from "react";
import UserContext from "../User/UserContext";
import { NavLink, Link } from "react-router-dom";
import {NavItem, Nav, } from 'reactstrap';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBarLoggedIn({ logout }) {
    const {currUser} = useContext(UserContext);

    return (
        <Nav className="justify-content-end">
            <NavItem>
                <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
                <Link onClick={logout} to="/">{`Logout ${currUser.username}`}</Link>
            </NavItem>
        </Nav>
    )
}

export default NavBarLoggedIn;