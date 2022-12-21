import React, { Component } from "react";
import NavbarComp from "./NavbarComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PaymentGateways.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
class PaymentGateways extends Component {
    render() {
        return (
            <div>
                <NavbarComp />
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
                <div className="container d-flex justify-content-center">
                    <Card className="corner payment-card" style={{ width: '70rem' }}>

                        <Card.Body>
                            <Card.Title className="heading-2 white margin-below">Enter Your Payment Details</Card.Title>

                            <Form.Group className="col col-lg-4 center payment-9" controlId="formBasicEmail">

                                <Form.Control type="name" placeholder="First Name" className="text-box payment-13" />
                                <Form.Text className="text-muted">

                                </Form.Text>

                            </Form.Group>
                            <Form.Group className="col col-lg-4 center payment-9" controlId="formBasicEmail">

                                <Form.Control type="name" placeholder="Last Name" className="text-box payment-13" />
                                <Form.Text className="text-muted">

                                </Form.Text>

                            </Form.Group>

                            <Form.Group className="col col-lg-4 center payment-10" controlId="formBasicEmail">

                                <Form.Control type="name" placeholder="Card Number" className="text-box payment-14" />
                                <Form.Text className="">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="col col-lg-4 center payment-10" controlId="formBasicEmail">

                                <Form.Control type="name" placeholder="Expiry Date(MM/YY)" className="text-box payment-14" />
                                <Form.Text className="">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="col col-lg-4 center payment-15 margin-below" controlId="formBasicEmail">

                                <Form.Control type="name" placeholder="Security Code(CVV)" className="text-box payment-13" />
                                <Form.Text className="text-muted">

                                </Form.Text>

                            </Form.Group>
                            <Form.Group className="col col-lg-4 center payment-15 " controlId="formBasicEmail">

                               
                                <Form.Text className="white">
                                Your payments will be processed internationally. Additional bank fees may apply.


                                </Form.Text>

                            </Form.Group>

                            <Form.Group className="col col-lg-4 center margin-below payment-17 white" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I Agree" className="payment-18"required />
                            </Form.Group>


                            <Button variant="primary" type="submit" className="submit-btn center payment-11">
                                Pay Now
                            </Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>
        )
    }
}

export default PaymentGateways;