import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegistrationComp.css"
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import NavbarComp from './NavbarComp';

class RegistrationComp extends Component {
    render() {
        return (
            <div>
                <NavbarComp />;
                <div className="bg-img register-1"></div>
                <div className="bg-img-2 register-2"></div>
                <div className="Tagline register-3">Book with Us and Book it out of Here</div>
                <div className="Tagline-2 register-4">A Signature of Excellence</div>
                <div>
                    <Form className=" ">
                        <Form.Control
                            type="search"
                            placeholder="Where would you like to go"
                            className="me-2 searchbar register-5"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="search register-6" >Search</Button>
                    </Form>
                </div>
                <div className='register-contact'>
                    <div className="blank-space register-7" ></div>
                    <Form className="cntct-form register-12">

                        <h2 className="top-margin register-8">Registration</h2>
                        <h2 className="heading-1 title-margin">Registration</h2>
                        <div className="underline">Check Status</div>
                        <div className="heading-2 white margin-below">Register a Tour with Us</div>
                        <Form.Group className="col col-lg-4 center register-9" controlId="formBasicEmail">

                            <Form.Control type="name" placeholder="Enter Name" className="text-box register-13" />
                            <Form.Text className="text-muted">

                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="col col-lg-4 center register-10" controlId="formBasicEmail">

                            <Form.Control type="tel" placeholder="Enter Phone" className="text-box register-14" />
                            <Form.Text className="">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col col-lg-4 center register-16" controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter Email" className="text-box" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col col-lg-4 center register-15" controlId="formBasicEmail">

                            <Form.Control type="name" placeholder="No. of People" className="text-box register-13" />
                            <Form.Text className="text-muted">

                            </Form.Text>

                        </Form.Group>
                        <Form.Group className="col col-lg-4 center margin-below register-17" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Indivial" />
                    </Form.Group>
                    <Form.Group className="col col-lg-4 center margin-below register-17" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Organization" />
                    </Form.Group>


                        <Button variant="primary" type="submit" className="submit-btn center register-11">
                            Proceed to Payment
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

export default RegistrationComp;