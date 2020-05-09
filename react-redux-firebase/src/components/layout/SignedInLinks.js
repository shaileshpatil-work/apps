import React from 'react'
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/" className="nav-link">New Project</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" className="nav-link">Logout</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" className="nav-link">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to="/" className="nav-link">New Project</NavLink>
                </DropdownItem>
                    <DropdownItem>
                        <NavLink to="/" className="nav-link">Logout</NavLink>
                </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <NavLink to="/" className="nav-link">Profile</NavLink>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

export default SignedInLinks