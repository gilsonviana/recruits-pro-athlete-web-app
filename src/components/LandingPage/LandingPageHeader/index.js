import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./style.css";
import logo from '../../../assets/images/logo.png'

const LandingPageHeader = () => {
    return (
        <header className="page__landing__header">
            <Navbar bg="transparent" expand="md">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="img-fluid"/>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="https://apps.apple.com/us/app/recruits-pro-evaluator/id1453988172" className="text-dark mr-4">Evaluators App &copy;</Nav.Link>
                            <Link
                                to="/login"
                                className="page__landing__header__link text-dark font-weight-bold"
                            >
                                Login
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default LandingPageHeader;
