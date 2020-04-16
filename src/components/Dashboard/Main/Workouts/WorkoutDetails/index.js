import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FiMoreVertical } from 'react-icons/fi'
import WorkoutDetailsVideoType from './WorkoutDetailsVideoType'
import WorkoutDetailsMetricsType from './WorkoutDetailsMetricsType'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'

import './style.css'

const WorkoutDetails = ({
    workouts
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

    const { id } = useParams()
    const workoutDate = moment(workoutState.createdAt).format('MMM Do YYYY, h:mm:ss a')

    useEffect(() => {
        setWorkoutState(workouts.filter(workout => workout._id === id)[0])
        console.log(workouts)
    }, [workouts, useParams()])

    return (
        <div className="page__workouts__details">
            <div className="page__workouts__details__header">
                <h4 className="page__workouts__details__header__title">{workoutState.name}</h4>
                <div className="page__workouts__details__header__right">
                    <span className="text-muted" style={{fontSize: '14px'}}>{workoutDate}</span>
                    <DropdownButton id="dropdown-basic-button" title={<FiMoreVertical />} className="ml-2 page__workouts__details__header__right__dropdown">
                        <Dropdown.Item href="#/action-1">Delete workout</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
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