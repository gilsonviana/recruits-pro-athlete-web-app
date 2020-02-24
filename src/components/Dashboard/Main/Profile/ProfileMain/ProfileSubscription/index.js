// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Redux
import { setProfileUnsubscribeRequest } from '../../../../../../store/profile/actions'

// Components
import ProfileSubscriptionEmptyState from './ProfileSubscriptionEmptyState'

const ProfileSubscription = ({ token, subscription, setProfileUnsubscribeRequest }) => {
    const handleUnsubscribe = () => {
        setProfileUnsubscribeRequest(token, subscription.id)
    }
    
    if (!subscription.id) {
        return <ProfileSubscriptionEmptyState />
    }

    return (
        <div className="widget__profile-subscription">
            <Card className="py-4">
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <label>Subscription status</label>
                        </Col>
                        <Col md={9}>
                            <span className="text-success">{subscription.status}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <label>Since</label>
                        </Col>
                        <Col md={9}>
                            {(subscription.startTime) && <span>{moment(subscription.startTime).format("dddd, MMMM Do YYYY")}</span>}
                        </Col>
                    </Row>
                    <Button variant="link" className="text-danger p-0" onClick={handleUnsubscribe}>Unsubscribe</Button>
                </Container>
            </Card>
        </div>
    )
}

ProfileSubscription.propTypes = {
    token: PropTypes.string.isRequired,
    subscription: PropTypes.object.isRequired,
    setProfileUnsubscribeRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    subscription: state.profile.subscription,
})

export default connect(mapStateToProps, { setProfileUnsubscribeRequest })(ProfileSubscription)