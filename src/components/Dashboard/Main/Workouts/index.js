// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WorkoutsSidebar from './WorkoutsSidebar'
import WorkoutDetails from './WorkoutDetails'
import Toast from 'react-bootstrap/Toast'
import MarketingBanner from "../MarketingBanner";

const Workouts = ({
    workouts,
    subscriptionStatus,
}) => {
    const [showToast, setShowToast] = useState({
        isVisible: false, 
        message: '', 
        backgroundColor: ''
    })

    const limitReached = subscriptionStatus !== 'ACTIVE' && workouts.length >= 3 ? true : false

    return (
        <div className="page__workouts">
            {
                subscriptionStatus !== 'ACTIVE' && 
                    <MarketingBanner 
                        title="Do more with Athletes Pro" 
                        text={`
                            Boost your profile with unlimited video uploads, social media integration, 
                            contact references and more by subscribing to Athletes Pro.
                        `} />
            }
            <div className="fixed-top"> 
                <Toast onClose={() => setShowToast({isVisible: false, message: '', backgroundColor: ''})} show={showToast.isVisible} delay={3000} autohide style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#eb5a46`,
                    color: `#eee`,
                    width: `100%`
                }}>
                    <Toast.Body>{showToast.message}</Toast.Body>
                </Toast>
            </div>
            <div className="page__workouts__header px-4 px-lg-2">
                <h5 className="font-weight-bold">Workouts shared with you</h5>
                <p className="lead">
                    Access workouts and see custom made instructions just for you
                </p>
            </div>
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        {
                            workouts.length > 0 ?
                                <WorkoutsSidebar workouts={workouts} /> :
                                <p>You don't have any workouts</p>
                        }
                    </Col>
                    <Col lg={{span: 8, offset: 1}}>
                        {
                            limitReached &&
                            <>
                                <h6 className="text-danger font-weight-bold lead">You have reached the videos upload limit.</h6>
                                <h6 className="text-danger font-weight-bold lead">Hit subscribe above to unlock unlimited workouts and access all premium features.</h6>
                            </>
                        }
                        <h5>Workout</h5>
                        <hr />
                        <Switch>
                            <Route path="/dashboard/workouts" exact>
                                <div className="lead bg-light text-center py-4">
                                    Select a workout
                                </div>
                            </Route>
                            <Route path="/dashboard/workouts/:id" exact>
                                <WorkoutDetails />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Workouts.propTypes = {
    workouts: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    workouts: state.workouts,
    subscriptionStatus: state.subscription.status,
})

export default connect(mapStateToProps)(Workouts)