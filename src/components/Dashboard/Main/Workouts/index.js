// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WorkoutsSidebar from './WorkoutsSidebar'
import WorkoutDetails from './WorkoutDetails'
import Toast from 'react-bootstrap/Toast'
import Loader from 'react-loader-spinner';
import MarketingBanner from "../MarketingBanner";

// Redux
import { getWorkouts } from '../../../../store/workouts/actions'

const Workouts = ({
    token,
    workouts,
    getWorkouts,
    subscriptionStatus
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [workoutsState, setWorkoutsState] = useState([])

    const limitReached = subscriptionStatus !== 'ACTIVE' && workouts.length >= 3 ? true : false

    useEffect(() => {
        setIsLoading(true)
        const fetchWorkouts = async () => {
            try {
                const res = await getWorkouts(token)
                setWorkoutsState(res)
                setIsLoading(false)
            } catch (e) {
                setShowToast(true)
                setIsLoading(false)
            }
        }
        fetchWorkouts()
    }, [subscriptionStatus])

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
                <Toast onClose={() => setShowToast(!showToast)} show={showToast} delay={3000} autohide style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#eb5a46`,
                    color: `#eee`,
                    width: `100%`
                }}>
                    <Toast.Body>Failed to get workouts, please check your internet connection.</Toast.Body>
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
                            isLoading ?
                            <div className="text-center">
                                <Loader 
                                    type="Oval"
                                    color="#00FF00"
                                    height={75}
                                    width={75}
                                />
                            </div> :
                            workouts.length > 0 ?
                                <WorkoutsSidebar workouts={workoutsState} /> :
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
    token: PropTypes.string.isRequired,
    workouts: PropTypes.array.isRequired,
    getWorkouts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    workouts: state.workouts,
    subscriptionStatus: state.subscription.status,
})

export default connect(mapStateToProps, { getWorkouts })(Workouts)