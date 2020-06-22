// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import socketIoClient from 'socket.io-client'
import KEYS from '../../config/keys'

// Components
import Header from './Header'
import Aside from './Aside'
import Main from './Main'

import { addNotification } from '../../store/notifications/actions'
import { updateEvaluationList } from '../../store/evaluations/actions'
import { updateWorkoutList } from '../../store/workouts/actions'

const Dashboard = ({ token, addNotification, updateEvaluationList, updateWorkoutList }) => {
    const { useEffect } = React

    useEffect(() => {
        const socket = socketIoClient(KEYS.WS, {
            query: {
                token
            },
            secure: true,
            reconnect: true,
            transports: ['websocket']
        })

        socket.on("Welcome", data => {
            console.info(data)
        })

        socket.on("NEW_EVALUATION", data => {
            addNotification(data.socketResponse)
            updateEvaluationList(data.socketEvaluation)
        })

        socket.on("NEW_WORKOUT", data => {
            console.log("NEW_WORKOUT", data.socketWorkout)
            addNotification(data.socketResponse)
            updateWorkoutList(data.socketWorkout)
        })
    }, [])

    return (
        <div className="app">
            <Header />
            <Aside />
            <Main />
        </div>
    )
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired,
    addNotification: PropTypes.func.isRequired,
    updateEvaluationList: PropTypes.func.isRequired,
    updateWorkoutList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { addNotification, updateEvaluationList, updateWorkoutList })(Dashboard)