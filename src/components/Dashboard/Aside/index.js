import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiHome, FiVideo } from 'react-icons/fi'
import { FaWpforms, FaRegNewspaper } from 'react-icons/fa'

import './style.css'

const Aside = () => {
    const match = useRouteMatch()
    return (
        <aside className="app__aside d-none d-md-block">
            <div className="app__aside__content">
                <div className="app__aside__content__menu overflow-hidden ps">
                    <nav className="stacked-menu">
                        <ul className="menu">
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to="/dashboard">
                                    <FiHome className="menu-item-icon" />
                                    <span className="menu-item-text">Overview</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to={`${match.path}/evaluations`}>
                                    <FaWpforms className="menu-item-icon" />
                                    <span className="menu-item-text">Evaluations</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to="">
                                    <FaRegNewspaper className="menu-item-icon" />
                                    <span className="menu-item-text">Events</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to="">
                                    <FiVideo className="menu-item-icon" />
                                    <span className="menu-item-text">Videos</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Aside