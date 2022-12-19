import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CheckStatusComp.css"
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import NavbarComp from './NavbarComp';
import ContactComp from './ContactComp';

class CheckStatusComp extends Component {
    render() {
        return (
            <div>
                <NavbarComp />;
                <div className="bg-img check-1"></div>
                <div className="bg-img-2 check-2"></div>
                <div className="Tagline check-3">Book with Us and Book it out of Here</div>
                <div className="Tagline-2 check-4">A Signature of Excellence</div>
                <div>
                    <Form className=" ">
                        <Form.Control
                            type="search"
                            placeholder="Where would you like to go"
                            className="me-2 searchbar check-5"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="search check-6" >Search</Button>
                    </Form>
                </div>
                <div className='check-contact'>
                    <div className="blank-space check-7" ></div>
                    <Form className="cntct-form check-12">

                        <h2 className="top-margin check-8">Check Status</h2>
                        <h2 className="heading-1 title-margin">Check Status</h2>
                        <div className="underline">Check Status</div>
                        <div className="heading-2 white margin-below">Check Status of Registered Tour</div>
                        <Form.Group className="col col-lg-4 center check-9" controlId="formBasicEmail">

                            <Form.Control type="name" placeholder="Enter Name" className="text-box check-13" />
                            <Form.Text className="text-muted">

                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="col col-lg-4 center check-10" controlId="formBasicEmail">

                            <Form.Control type="tel" placeholder="Enter Phone" className="text-box check-14" />
                            <Form.Text className="">

                            </Form.Text>
                        </Form.Group>



                        <Button variant="primary" type="submit" className="submit-btn center check-11">
                            Check
                        </Button>
                    </Form>
                </div>
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
            </div>
        )
    }
}

export default CheckStatusComp;