// Dependencies
import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { FiHome, FiVideo } from 'react-icons/fi'
import { FaWpforms, FaRegNewspaper } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'

// Assets
import './style.css'

const Aside = ({ subscription }) => {

    /**
     * Use to verify if user has a subscription id
     */
    const isSubscriber = () => {
        if (!subscription.id) {
            return false
        }

        return true
    }
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
                                <Link className="menu-item-link text-dark" to={`/dashboard/evaluations`}>
                                    <FaWpforms className="menu-item-icon" />
                                    <span className="menu-item-text">Evaluations</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to={(!isSubscriber()) ? '/dashboard/profile/subscribe' : '/'}>
                                    <FaRegNewspaper className="menu-item-icon" />
                                    <span className="menu-item-text">Events</span>
                                    {(!isSubscriber()) && <Badge pill variant="success" className="float-right mt-1">Pro</Badge>}
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-item-link text-dark" to={(!isSubscriber()) ? '/dashboard/profile/subscribe' : '/'}>
                                    <FiVideo className="menu-item-icon" />
                                    <span className="menu-item-text">Videos</span>
                                    {(!isSubscriber()) && <Badge pill variant="success" className="float-right mt-1">Pro</Badge>}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

Aside.propTypes = {
    subscription: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    subscription: state.profile.subscription
})

export default connect(mapStateToProps)(Aside)