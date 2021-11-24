import React from "react";
import { NavLink } from "react-router-dom";
import {NavItem, Nav} from 'reactstrap';
import "./NavBar.css";

function NavBarNoUser() {
    return (
        <Nav className="justify-content-end">
            <NavItem>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
            </NavItem>
        </Nav>
    )
}

export default NavBarNoUser;