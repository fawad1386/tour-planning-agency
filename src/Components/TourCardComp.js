import React,{Component} from "react";
import "./TourCardComp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";
import {
    BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
class TourCardComp extends Component{
    render(){
        return(
            <div className="tour-card">
                <div className="container d-flex justify-content-center">
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="black-bg.png" />
                        <Card.Body>
                            <Card.Title>Tours in Paris</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card  className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in Moscow</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in New York</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card></div>
                <div className="container d-flex justify-content-center middle-div">
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in Sylht</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in Rome</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in Prague</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card></div>
                <div className="container d-flex justify-content-center">                    
                <Card className="corner" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Tours in Thailand</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary    btn-card">View More</Button>
                    </Card.Body>
                </Card>
                    <Card className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in London</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary    btn-card">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tours in Maldives</Card.Title>
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

export default TourCardComp;