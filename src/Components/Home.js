import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    </Form>
                </div>
                <div className="heading-1">Our Services</div>
                <div className="underline">Our Services</div>
                <div className="heading-2">Popular Tours</div>
                {/*<div>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
        </div>*/}

                <div className="sub">
                    <div className="bg-img-3"></div>
                    <div className="heading-1 sub-1">Subscribe</div>
                    <div className="underline sub-2">Subscribe</div>
                    <div className="heading-2 sub-3">Subscribe to our Newsletter</div>

                    <div>
                        <Form className="d-flex sub">
                            <Form.Control
                                type="email"
                                placeholder="Enter your Email here"
                                className="me-2 subbar"
                                aria-label="Subscribe Now"
                            />
                            <Button variant="outline-success" className="subscribe" >Subscribe Now</Button>
                        </Form>
                    </div>
                </div>
                <div className="about">
                    <div className="heading-1">About Us</div>
                    <div className="underline">About Us</div>
                    <div className="heading-2">A Signature of Excellence</div>

                </div>

                <div className="gallery">
                    <div className="heading-1">Our Gallery</div>
                    <div className="underline">Our Gallerr</div>
                    <div className="heading-2">Photos by Our Customers</div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="carousel-item">
                    <img src="./src/img/kevin-ianeselli-4iTVoGYY7bM-unsplash \1.png" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>


            </Router>
        )
    }
}
export default Home;