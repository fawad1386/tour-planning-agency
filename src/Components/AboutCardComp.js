import React,{Component} from 'react';
import "./AboutCardComp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";
import {
    BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
class AboutCardComp extends Component{
    render(){
        return(
            <div className='tour-card'>
                <div className="container d-flex justify-content-center">                    
                <Card className="corner" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Happy Clients</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary    btn-card">View More</Button>
                    </Card.Body>
                </Card>
                    <Card className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Amazing Tours</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card ">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Good Ratings</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        )
    }
}

export default AboutCardComp;