// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import ProfileHeader from './ProfileHeader'
import ProfileAside from './ProfileAside'
import ProfileMain from './ProfileMain'

const Profile = () => {
    return (
        <div className="page__profile">
            <ProfileHeader />
            <Container fluid className="mt-4">
                <Row>
                    <Col lg={3}>
                        <ProfileAside />
                    </Col>
                    <Col lg={{span: 8, offset: 1}}>
                        <ProfileMain />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile