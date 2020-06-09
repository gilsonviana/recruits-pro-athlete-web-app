// Dependencies
import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import Notification from './Notification'

// Redux
import { doLogout } from '../../../store/auth/actions'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import avatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png'

import './style.css'

const Header = ({ doLogout, token, fullName, avatarUrl, history, profileId }) => {
    const [searchName, setSearchName] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        
        if (searchName) {
            history.push({
                pathname: '/public',
                search: `?name=${searchName}`
            })
        }
    }
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
                <Form onSubmit={handleSearch}>
                    <Form.Row>
                        <Col sm={8}>
                            <FormControl type="text" onChange={e => setSearchName(e.target.value)} placeholder="Search" className="mr-sm-2" />
                        </Col>
                        <Col sm={4} className="mt-2 mt-sm-0">
                            <Button type="submit" variant="outline-success">Search</Button>
                        </Col>
                    </Form.Row> 
                </Form>
                {
                    !token ?
                    <Nav className="mr-auto mt-4">
                        <Link to={'/login'} className="nav-link text-white btn btn-outline-success">Login</Link>
                        <Link to={'/signup'} className="nav-link text-dark btn btn-success mt-3" style={{backgroundColor: '#00EC00'}}>Sign up</Link>
                    </Nav> :
                    <Nav className="mr-auto">
                        <Link to={`/public/${profileId}`} className="nav-link">Profile</Link>
                        <Link to={`/dashboard`} className="nav-link">Overview</Link>
                        <Link to={`/dashboard/evaluations`} className="nav-link">Evaluations</Link>
                        <Link to={`/dashboard/videos`} className="nav-link">Videos</Link>
                        <Link to={`/dashboard/profile`} className="nav-link">Settings</Link>
                        <Nav.Link onClick={doLogout}>Logout</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
        <header className="app__header bg-dark fixed-top d-none d-md-block">
            <div className="app__header__top__bar">
                <Link to={token ? '/dashboard' : '/'} className="app__header__top__bar__brand mr-4">
                    <img src={brand} alt="Recruits Pro Logo" className="d-none d-md-flex"/>
                    <h3 className="text-white d-md-none">Recruits Pro</h3>
                </Link>
                <Form inline onSubmit={handleSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => setSearchName(e.target.value.trim())}/>
                    <Button type="submit" className="text-dark" style={{backgroundColor: '#00EC00', border: 'none'}}>Search</Button>
                </Form>
                {
                    !token ?
                        <Nav className="ml-auto mr-4">
                            <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                            <Nav.Link as={Button} variant="success" href="/signup" className="text-dark d-none d-md-inline-block" style={{backgroundColor: '#00EC00'}}>Sign up</Nav.Link>
                        </Nav> :
                    <div className="app__header__top__bar__list d-none d-md-flex">
                        <Notification />
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
                                        willChange: `top, left`,
                                    }}
                                >
                                    <Link to={`/dashboard/profile`} className="dropdown-item" as={<Dropdown.Item />}>
                                        <FiSettings className="dropdown-icon oi oi-person" /> Settings
                                    </Link>
                                    <Dropdown.Item onClick={doLogout}>
                                        <FiLogOut className="dropdown-icon oi oi-account-logout" /> Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                }
            </div>
        </header>
        </>
    )
}

Header.propTypes = {
    doLogout: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    fullName: state.profile.personal.fullName,
    avatarUrl: state.profile.personal.avatarUrl,
    profileId: state.profile._id
})

export default withRouter(connect(mapStateToProps, { doLogout })(Header))