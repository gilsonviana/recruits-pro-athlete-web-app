import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import WorkoutDetailsVideoType from './WorkoutDetailsVideoType'
import WorkoutDetailsMetricsType from './WorkoutDetailsMetricsType'

const WorkoutDetails = ({
    workouts
}) => {
    const [workoutState, setWorkoutState] = useState({
        type: '',
        name: '',
        videoLink: '',
        notes: '',
        categories: [],
        metrics: []
    })

    const { id } = useParams()

    useEffect(() => {
        setWorkoutState(workouts.filter(workout => workout._id === id)[0])
    }, [workouts, useParams()])

    return (
        <div className="page__workouts__details lead">
            <h4>{workoutState.name}</h4>
            {
                workoutState.type == 'l' ?
                <WorkoutDetailsVideoType videoLink={workoutState.videoLink} notes={workoutState.notes} /> :
                <WorkoutDetailsMetricsType categories={workoutState.categories} metrics={workoutState.metrics} />
            }
        </div>
    )
}

WorkoutDetails.propTypes = {
    workouts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    workouts: state.profile.workouts
})

export default connect(mapStateToProps)(WorkoutDetails)