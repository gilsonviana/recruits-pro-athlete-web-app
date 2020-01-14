import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from 'react-icons/fi'

import './style.css'

const Aside = () => {
    return (
        <aside className="app__aside">
            <div className="app__aside__content">
                <div className="app__aside__content__menu overflow-hidden ps">
                    <nav className="stacked-menu">
                        <ul className="menu">
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to="">
                                    <FiHome className="menu-item-icon" />
                                    <span className="menu-item-text">Overview</span>
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