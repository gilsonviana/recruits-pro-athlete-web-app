// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const PublicProfileSingleMainNavItem = ({ title, icon: Icon }) => {
    return (
        <span className="public-profile__single__main__nav-item d-block text-uppercase text-center font-weight-bold text-muted">
            <h6 className="d-none d-md-inline-block">{title}</h6>
            <Icon className="d-block mt-2 mx-auto" size={`1.3rem`} color="#6c757d"/>
        </span>
    )
}

PublicProfileSingleMainNavItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired
}

export default PublicProfileSingleMainNavItem