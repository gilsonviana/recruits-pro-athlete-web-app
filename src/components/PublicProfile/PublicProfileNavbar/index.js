// Dependencies
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import './style.css'

const PublicProfileNavbar = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" className="public-profile-navbar fixed-top" style={{minHeight: `4rem`}}>
            <Navbar.Brand href="#home">
                <div className="app__header__top__bar__brand">
                    <img src={brand} alt="Recruits Pro Logo"/>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="mt-4 mt-md-0">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                    <Nav.Link variant="success" href="/signup" className="text-white d-md-none">Sign up</Nav.Link>
                    <Nav.Link as={Button} variant="success" href="/signup" className="text-white d-none d-md-inline-block">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PublicProfileNavbar