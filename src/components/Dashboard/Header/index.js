// Dependencies
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// Redux
import { doLogout } from '../../../store/auth/actions'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import avatarPlaceholder from '../../../assets/images/user-avatar-placeholder.png'

import './style.css'

const Header = ({ doLogout, token, fullName, avatarUrl, history }) => {
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
                <Form inline onSubmit={handleSearch}>
                    <FormControl type="text" onChange={e => setSearchName(e.target.value)} placeholder="Search" className="mr-sm-2" />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
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
        <header className="app__header bg-dark fixed-top d-none d-md-block">
            <div className="app__header__top__bar">
                <Link to={token ? '/dashboard' : '/'} className="app__header__top__bar__brand mr-4">
                    <img src={brand} alt="Recruits Pro Logo" className="d-none d-md-flex"/>
                    <h3 className="text-white d-md-none">Recruits Pro</h3>
                </Link>
                <Form inline onSubmit={handleSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => setSearchName(e.target.value.trim())}/>
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
                {
                    !token ?
                        <Nav className="ml-auto mr-4">
                            <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                            <Nav.Link variant="success" href="/signup" className="text-white d-md-none">Sign up</Nav.Link>
                            <Nav.Link as={Button} variant="success" href="/signup" className="text-white d-none d-md-inline-block">Sign up</Nav.Link>
                        </Nav> :
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
    avatarUrl: state.profile.personal.avatarUrl
})

export default withRouter(connect(mapStateToProps, { doLogout })(Header))