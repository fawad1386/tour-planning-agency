import React,{Component} from "react";
import "./GalleryComp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";
import {
    BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
class GalleryComp extends Component{
    render(){
        return(
            <div>
                <div className="container d-flex justify-content-center">
                <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="card-center corner"  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                </div>
                <div className="container d-flex justify-content-center middle-div">
                <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                </div>
                <div className="container d-flex justify-content-center">
                <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="card-center corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                    <Card className="corner" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        
                    </Card>
                </div>
            </div>
        )
    }
    }

    export default GalleryComp;