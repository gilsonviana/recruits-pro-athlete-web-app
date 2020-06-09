import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment'

const NotificationItem = ({ notification }) => {
    const renderDate = (date) => {
        if (date) {
            return moment(date).fromNow()
        }
    }

    const renderType = (type = "") => {
        switch(type) {
            case "EVALUATION":
                return <span className="font-weight-bold">evaluation</span>
            default:
                return 'TYPE'
        }
    }
    return (
        <Link  to={`/dashboard/profile`} className="dropdown-item app__header__top__bar__item-bell__item" as={<Dropdown.Item />}>
            <h6>New {renderType(notification.type)} from <span className="font-weight-bold">{notification.senderName}</span></h6>
            <span className="text-muted">{renderDate(notification.date)}</span>
        </Link>
    )
}

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        _id: PropTypes.string,
        type: PropTypes.string,
        senderName: PropTypes.string,
        date: PropTypes.string,
        read: PropTypes.bool
    }).isRequired
}

export default NotificationItem