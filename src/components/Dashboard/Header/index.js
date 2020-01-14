import React from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiLogOut } from 'react-icons/fi'
import Dropdown from 'react-bootstrap/Dropdown'

import brand from '../../../assets/images/logo.png'
import avatar from '../../../assets/images/avatar-example.jpg'

import './style.css'

const Header = () => {
    return (
        <header className="app__header bg-dark">
            <div className="app__header__top__bar">
                <div className="app__header__top__bar__brand">
                    <Link to="/">
                        <img src={brand} alt="Recruits Pro Logo"/>
                    </Link>
                </div>
                <div className="app__header__top__bar__list">
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
                                <span className="account-summary pr-lg-4 d-none d-lg-block">
                                    <span className="account-name">Beni Arisandi</span> 
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
    )
}

export default Header