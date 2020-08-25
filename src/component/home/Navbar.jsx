import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './css/navbar.css'

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            

            <Navbar className="navbar"  light expand="md">
                <NavbarBrand href="/"><div className="logo">Logo</div></NavbarBrand>
                <NavbarToggler className="navlink" onClick={toggle} />
                <Collapse className="pin" isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><div className="navlink">Home</div></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/gallery"><div className="navlink">Galerry</div></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/About"><div className="navlink">About</div></NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
            
    )
}

export default NavbarComp