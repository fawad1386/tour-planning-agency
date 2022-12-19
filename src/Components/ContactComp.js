import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactComp.css"
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

class ContactComp extends Component {
    render() {
        return (
            <div className="">
                <div className="blank-space"></div>
                <Form className="cntct-form">

                    <h2 className="top-margin">Contact Us</h2>
                    <h2 className="heading-1 title-margin">Contact Us</h2>
                    <div className="underline">Contact Us</div>
                    <div className="heading-2 white margin-below">Get in Touch</div>
                    <Form.Group className="col col-lg-4 center" controlId="formBasicEmail">

                        <Form.Control type="name" placeholder="Enter Name" className="text-box" />
                        <Form.Text className="text-muted">

                        </Form.Text>

                    </Form.Group>
                    <Form.Group className="col col-lg-4 center" controlId="formBasicEmail">

                        <Form.Control type="name" placeholder="Enter Surname" className="text-box" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col col-lg-4 center" controlId="formBasicEmail">

                        <Form.Control type="tel" placeholder="Enter Phone" className="text-box" />
                        <Form.Text className="">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col col-lg-4 center" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter Email" className="text-box" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="col col-lg-4 center" controlId="formBasicPassword">


                        <Form.Control type="text" placeholder="Type your Message Here..." className="margin-below box" />
                    </Form.Group>
                    <Form.Group className="col col-lg-4 center margin-below" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I have read and agreed with the Terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-btn center">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContactComp;