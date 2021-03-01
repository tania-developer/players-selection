import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import Logo from '../../images/Bangladesh_Cricket_Board_Logo.svg'

const Header = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="#home">BD Players Selection</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Players</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;