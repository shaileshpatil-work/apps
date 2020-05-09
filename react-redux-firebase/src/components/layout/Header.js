import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,    
} from 'reactstrap';
import { Link } from "react-router-dom";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="dark" dark expand="md" className="mb-5">
            <Link to="/" className="navbar-brand">Project</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <SignedInLinks/>                              
            </Collapse>
            <Collapse isOpen={isOpen} navbar>
                <SignedOutLinks />
            </Collapse>
        </Navbar>
    )
}

export default Header