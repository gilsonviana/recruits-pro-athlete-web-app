import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FiMoreVertical } from 'react-icons/fi'
import WorkoutDetailsVideoType from './WorkoutDetailsVideoType'
import WorkoutDetailsMetricsType from './WorkoutDetailsMetricsType'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'

import { deleteWorkout } from '../../../../../store/workouts/actions'

import './style.css'

const WorkoutDetails = ({
    token,
    workouts,
    deleteWorkout,
    history
}) => {
    const [workoutState, setWorkoutState] = useState({
        type: '',
        name: '',
        videoLink: '',
        notes: '',
        categories: [],
        metrics: [],
        createdAt: ''
    })
    const [workoutMetricsState, setWorkoutMetricsState] = useState([])

    const { id } = useParams()
    const workoutDate = moment(workoutState.createdAt).format('MMM Do YYYY, h:mm:ss a')

    useEffect(() => {
        const workoutDetails = workouts.filter(workout => workout._id === id)[0]
        setWorkoutState(workoutDetails)
        setWorkoutMetricsState(workoutDetails.metrics)
    }, [workouts, useParams()])

    const handleOnDelete = () => {
        const index = workouts.findIndex((workout) => workout._id === workoutState._id)
        history.push('/dashboard/workouts')
        deleteWorkout(token, workoutState._id, index)
    }

    const handleOnSearch = (e) => {
        e.preventDefault()
        const { target } = e
        setWorkoutMetricsState(workoutState.metrics.filter(workout => workout.name.indexOf(target.value) >= 0))
    }

    const handleOnFilter = (category = "all") => {
        setWorkoutMetricsState(workoutState.metrics.filter(workout => workout.category === category || category === 'all'))
    }

    return (
        <div className="page__workouts__details">
            <div className="page__workouts__details__header">
                <h4 className="page__workouts__details__header__title">{workoutState.name}</h4>
                <div className="page__workouts__details__header__right">
                    <span className="text-muted" style={{fontSize: '14px'}}>{workoutDate}</span>
                    <DropdownButton id="dropdown-basic-button" title={<FiMoreVertical />} className="ml-2 page__workouts__details__header__right__dropdown">
                        <Dropdown.Item onClick={handleOnDelete}>Delete workout</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            {
                workoutState.type == 'l' ?
                <WorkoutDetailsVideoType videoLink={workoutState.videoLink} notes={workoutState.notes} /> :
                <WorkoutDetailsMetricsType categories={workoutState.categories} metrics={workoutMetricsState} handleSearch={handleOnSearch} handleFilter={handleOnFilter}/>
            }
        </div>
    )
}

WorkoutDetails.propTypes = {
    token: PropTypes.string.isRequired,
    workouts: PropTypes.array.isRequired,
    deleteWorkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    workouts: state.profile.workouts
})

export default withRouter(connect(mapStateToProps, { deleteWorkout })(WorkoutDetails))