import React, { Component } from "react";
import "./NavbarComp.css"
import "./Home";
import "./CheckStatusComp";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';
class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className="Background-color">
                    <Navbar bg="transparent" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/CheckStatusComp" className="logo">Let's Travel</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>

                                    <Nav.Link href="/Home" className="nav-text" >Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/check-status"} className="nav-text">Check Status</Nav.Link>
                                    <Nav.Link as={Link} to={"/about"} className="nav-text">About</Nav.Link>
                                    <Nav.Link as={Link} to={"/admin"} className="nav-text">Admin</Nav.Link>
                                </Nav>
                                <Form className="d-flex ">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search here"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" className="btn" >Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar></div>
            </Router>
        )
    }
}

export default NavbarComp;