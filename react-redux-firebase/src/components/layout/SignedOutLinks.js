import React from 'react'
import {
    Nav,
    NavItem,    
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/signup" className="nav-link">Sigup</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/SignIn" className="nav-link">SignIn</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to="/signup" className="nav-link">Sigup</NavLink>
                </DropdownItem>
                    <DropdownItem>
                        <NavLink to="/SignIn" className="nav-link">SignIn</NavLink>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

export default SignedOutLinks