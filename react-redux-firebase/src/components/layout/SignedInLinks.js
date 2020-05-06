import React from 'react'
import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const SignedInLinks = () => {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/">New Project</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/">Logout</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to="/">New Project</NavLink>
                </DropdownItem>
                    <DropdownItem>
                        <NavLink to="/">Logout</NavLink>
                </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <NavLink to="/">Profile</NavLink>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

export default SignedInLinks