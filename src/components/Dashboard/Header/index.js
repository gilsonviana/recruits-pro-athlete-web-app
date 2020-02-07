import React from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiLogOut } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import brand from '../../../assets/images/logo-dashboard.png'
import avatar from '../../../assets/images/avatar-example.jpg'

import './style.css'

const Header = () => {
    return (
        <>
        <Navbar fixed="top" className="d-md-none" bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="#home">
                <div className="app__header__top__bar__brand">
                    <img src={brand} alt="Recruits Pro Logo"/>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="app-mobile-navbar-nav" />
            <Navbar.Collapse id="app-mobile-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Overview</Nav.Link>
                    <Nav.Link href="#link">Evaluations</Nav.Link>
                    <Nav.Link href="#link">Events</Nav.Link>
                    <Nav.Link href="#link">Videos</Nav.Link>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Evaluations</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Videos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <header className="app__header bg-dark">
            <div className="app__header__top__bar">
                <div className="app__header__top__bar__brand">
                    <img src={brand} alt="Recruits Pro Logo" className="d-none d-md-flex"/>
                    <h3 className="text-white">Recruits Pro</h3>
                </div>
                <div className="app__header__top__bar__list d-none d-md-flex">
                    <div className="app__header__top__bar__item">
                        <Dropdown className="dropdown d-flex text-light">
                            <Dropdown.Toggle
                                className="btn-account d-none d-md-flex" 
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                <span className="user-avatar user-avatar-md">
                                    <img src={avatar} alt="user avatar" />
                                </span> 
                                <span className="account-summary pr-lg-4 d-lg-block">
                                    <span className="account-name">Chris Sam</span> 
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                                x-placement="bottom-start" 
                                style={{
                                    position: `absolute`, 
                                    top: `56px`, 
                                    left: `0px`, 
                                    willChange: `top, left`
                                }}
                            >
                                <Dropdown.Item>
                                    <Link to="" className="dropdown-item">
                                        <FiUser className="dropdown-icon oi oi-person" /> Profile
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="" className="dropdown-item">
                                        <FiLogOut className="dropdown-icon oi oi-account-logout" /> Logout
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header