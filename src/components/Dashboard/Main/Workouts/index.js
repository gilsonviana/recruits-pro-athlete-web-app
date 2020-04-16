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

const Workouts = ({
    workouts
}) => {
    return (
        <div className="page__workouts">
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
    workouts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    workouts: state.profile.workouts
})

export default connect(mapStateToProps)(Workouts)