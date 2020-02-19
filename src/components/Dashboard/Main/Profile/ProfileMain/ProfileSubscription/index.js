// Dependencies
import React from 'react'
import moment from 'moment'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Components
import ProfileSubscriptionEmptyState from './ProfileSubscriptionEmptyState'

const ProfileSubscription = () => {

    // return <ProfileSubscriptionEmptyState />

    return (
        <div className="widget__profile-subscription">
            <Card className="py-4">
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <label>Subscription status</label>
                        </Col>
                        <Col md={9}>
                            <span className="text-success">ACTIVE</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <label>Last payment</label>
                        </Col>
                        <Col md={9}>
                            <span>{moment(Date()).format("dddd, MMMM Do YYYY")}</span>
                        </Col>
                    </Row>
                    <Button variant="link" className="text-danger p-0">Unsubscribe</Button>
                </Container>
            </Card>
        </div>
    )
}

export default ProfileSubscription