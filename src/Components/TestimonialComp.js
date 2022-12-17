import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './TestimonialComp.css';

class TestimonialComp extends Component {
    render() {
        return (
            <div>
                 <div className="bg-img r-img"></div>
                <h2 className="heading-1 r-heading">Testimonials</h2>
                    <div className="underline">Testimonials</div>
                    <div className="heading-2">What our clients say</div>
                   
                    <div className="heading-1 r-name"> Harry Brook</div>
                    <div className="heading-2 r-tribe">Vikings</div>
                    <p className="heading-1 r-feedback">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {/*<Carousel>
                    <Carousel.Item>
                        <div className="d-block w-100 ">
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
        </Carousel>6*/}
            </div>
        )
    }

}

export default TestimonialComp;