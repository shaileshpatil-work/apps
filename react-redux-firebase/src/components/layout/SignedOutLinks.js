import React from 'react'
import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const SignedOutLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/">Sigup</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/">SignIn</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownMenu right>
                    <DropdownItem>
                        Sigup
                </DropdownItem>
                    <DropdownItem>
                        SignIn
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

export default SignedOutLinks