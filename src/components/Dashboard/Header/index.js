// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiUser, FiLogOut } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Redux
import { doLogout } from '../../../store/auth/actions'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import avatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png'

import './style.css'

const Header = ({ doLogout, fullName, avatarUrl }) => {
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
        <header className="app__header bg-dark fixed-top">
            <div className="app__header__top__bar">
                <div className="app__header__top__bar__brand">
                    <img src={brand} alt="Recruits Pro Logo" className="d-none d-md-flex"/>
                    <h3 className="text-white d-md-none">Recruits Pro</h3>
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
                                <span className="user-avatar user-avatar-md bg-light">
                                    {!avatarUrl ?
                                        <img src={avatarPlaceholder} alt="user avatar" /> :
                                        <img src={avatarUrl} alt={`${fullName} avatar`} />
                                    }
                                </span> 
                                <span className="account-summary pr-lg-4 d-lg-block">
                                    <span className="account-name">{fullName}</span> 
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
                                <Link to={`/dashboard/profile`} className="dropdown-item" as={<Dropdown.Item />}>
                                    <FiUser className="dropdown-icon oi oi-person" /> Profile
                                </Link>
                                <Dropdown.Item onClick={doLogout}>
                                    <FiLogOut className="dropdown-icon oi oi-account-logout" /> Logout
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

Header.propTypes = {
    doLogout: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
}

const mapStateToProps = (state) => ({
    fullName: state.profile.personal.fullName,
    avatarUrl: state.profile.personal.avatarUrl
})

export default connect(mapStateToProps, { doLogout })(Header)