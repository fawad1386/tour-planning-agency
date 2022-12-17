import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ContactComp from "./ContactComp.js";
import TestimonialComp from "./TestimonialComp";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
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
                <TestimonialComp/>
                <ContactComp/>
                
                </div>
          
        )
    }
}
export default Home;
