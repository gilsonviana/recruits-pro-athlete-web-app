import * as React from 'react'
import { connect } from 'react-redux'
import { FaBell } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import NotificationItem from './NotificationItem'
import NotificationEmptyState from './NotificationEmptyState'

import { markAllNotification, clearNotification } from '../../../../store/notifications/actions'

import './style.css'

const Notification = ({ notifications, markAllNotification, clearNotification }) => {
    const renderNotificationNumber = () => {
        if (notifications.list.length > 0) {
            const notificationsNumber = notifications.list.filter(item => item.read === false).length
            if (notificationsNumber > 0) {
                return <div className="fabell__badge">{notificationsNumber}</div>
            }
        }
        return null
    }

    const renderNotificationItems = () => {
        if (notifications.list.length > 0) {
            return notifications.list.map((notification, i) => <NotificationItem key={i} notification={notification}/>)
        }
    }
    return (
        <div className="app__header__top__bar__item-bell">
            <Dropdown className="dropdown d-flex text-light">
                <Dropdown.Toggle
                    className="btn-account d-none d-md-flex"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span 
                        className="fabell" 
                        onClick={() => clearNotification()}
                    >
                        <FaBell />
                        {renderNotificationNumber()}
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    x-placement="bottom-start"
                    style={{
                        position: `absolute`,
                        top: `56px`,
                        left: `0px`,
                        willChange: `top, left`,
                        overflowY: 'scroll',
                        height: `380px`
                    }}
                >
                    {
                        notifications.list.length > 0 ?
                        <>
                        <div className="app__header__top__bar__item-bell__header">
                            <Button variant="link" onClick={() => markAllNotification()}>Mark All as Read</Button>
                        </div>
                        {renderNotificationItems()}
                        </> :
                        <NotificationEmptyState />
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

Notification.propTypes = {
    notifications: PropTypes.object.isRequired,
    markAllNotification: PropTypes.func.isRequired,
    clearNotification: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    notifications: state.notifications
})

export default connect(mapStateToProps, { markAllNotification, clearNotification })(Notification)