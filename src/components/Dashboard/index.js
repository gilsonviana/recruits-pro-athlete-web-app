// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Components
import Header from './Header'
import Aside from './Aside'
import Main from './Main'

import { addNotification } from '../../store/notifications/actions'

const Dashboard = ({ addNotification }) => {
    const { useEffect } = React

    useEffect(() => {
        // TODO: CONNECT TO WEBSOCKET
        setTimeout(() => {
            console.log("addNotification");
            
            addNotification({
                type: 'EVALUATION',
                senderName: 'Gilson Viana',
                date: '2020-06-09T21:11:26.099Z',
                read: false
            })
        }, 2000)
    }, [])

    return (
        <div className="app">
            <Header />
            <Aside />
            <Main />
        </div>
    )
}

export default connect(null, { addNotification })(Dashboard)