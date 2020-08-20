import React from 'react'

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoppingCart from '../shoppingCart/shoppingcart'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const NavBar = () => {
    var Products_quantity = useSelector(state => state.CartReducer.Cart)

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title={
                    <span>{Products_quantity.length} <FontAwesomeIcon icon={faShoppingBag} /></span>} id="basic-nav-dropdown">
                        <ShoppingCart />
                    </NavDropdown>

                    
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

/*
{<FontAwesomeIcon icon={faShoppingBag} />}

``

*/