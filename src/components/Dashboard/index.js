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

const Dashboard = ({ token, addNotification, updateEvaluationList }) => {
    const { useEffect } = React

    useEffect(() => {
        const socket = socketIoClient(KEYS.WS, {
            query: {
                token
            }
        })

        socket.on("NEW_EVALUATION", data => {
            console.log("Dashboard->useEffect->NewEvaluation", data);
            addNotification(data.socketResponse)
            updateEvaluationList(data.socketEvaluation)
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
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { addNotification, updateEvaluationList })(Dashboard)