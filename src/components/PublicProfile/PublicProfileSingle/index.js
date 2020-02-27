// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

// Assets
import './style.css'
import avatarImg from "../../../assets/images/avatar-example.jpg"

// Components
import PublicProfileSingleHeader from './PublicProfileSingleHeader'
import PublicProfileSingleAside from './PublicProfileSingleAside'
import PublicProfileSingleMain from './PublicProfileSingleMain'

const PublicProfileSingle = () => {
    return (
        <div className="page__public-profile-single">
            <PublicProfileSingleHeader />
            <PublicProfileSingleAside />
            <PublicProfileSingleMain />
        </div>
    )
}

export default PublicProfileSingle