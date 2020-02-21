// Dependencies
import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button } from '../../../../../../../styled-components'

// Assets
import './style.css'

const ProfileSubscriptionEmptyState = ({ history }) => {
    const handleSubscribeNow = () => {
        history.push('/dashboard/profile/subscribe')
    }
    return (
        <div className="empty__profile-subscription">
            <h4>No subscription found.</h4>
            <p className="lead">
                Upgrade to <b>Athletes Pro</b> to gain access to premium
                content such as unlimited video upload, previous evaluations,
                and powerful career insight from coaches.
            </p>
            <div className="empty__profile-subscription__button">
                <Button onClick={handleSubscribeNow}>Subscribe now</Button>
            </div>
        </div>
    )   
}

ProfileSubscriptionEmptyState.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(ProfileSubscriptionEmptyState)