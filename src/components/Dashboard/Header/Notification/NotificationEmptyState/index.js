import * as React from 'react'
import './style.css'

const NotificationEmptyState = () => {
    return (
        <div className="notification__empty__state">
            <h6>No Notifications Yet</h6>
            <p className="lead">
                Your notifications will show up here.
            </p>
        </div>
    )
}

export default NotificationEmptyState