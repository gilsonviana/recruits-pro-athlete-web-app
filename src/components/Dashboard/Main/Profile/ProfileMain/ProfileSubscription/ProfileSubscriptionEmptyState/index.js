// Dependencies
import React from 'react'
import { Button } from '../../../../../../../styled-components'

// Assets
import './style.css'

const ProfileSubscriptionEmptyState = () => {
    return (
        <div className="empty__profile-subscription">
            <h4>No subscription found.</h4>
            <p className="lead">
                Subscribe to <b>Pro Plan</b> to gain access to premium
                content such as unlimited video upload, previous evaluations,
                and powerful career insight from coaches.
            </p>
            <div className="empty__profile-subscription__button">
                <Button>Go to plan</Button>
            </div>
        </div>
    )   
}

export default ProfileSubscriptionEmptyState