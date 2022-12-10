import React, { Component } from "react";
import './Home.css';
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import {
    BrowserRouter as Router, 
} from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <Router>
                <div className="bg-img"></div>
                <div className="bg-img-2"></div>
                <div className="Tagline">Book with Us and Book it out of Here</div>
                <div className="Tagline-2">A Signature of Excellence</div>
                <div>
                <Form className=" ">
                                <Form.Control
                                    type="search"
                                    placeholder="Where would you like to go"
                                    className="me-2 searchbar"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className="search" >Search</Button>
                            </Form></div>
            </Router>
        )
    }
}
export default Home;