import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FooterComp.css";
class FooterComp extends Component() {
    render() {
        return (
            <footer class="bg-light text-center text-lg-start footer-down">

                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                    © 2020 Copyright:
                    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>
        );
    }
}

export default FooterComp;