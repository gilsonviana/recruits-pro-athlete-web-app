import React from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProfileSubscription } from '../../store/profile/actions'

const ProcessPayment = ({ token, updateProfileSubscription }) => {
    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const subscriptionId = query.get('subscription_id')

        updateProfileSubscription(token, subscriptionId)
    })

    return (
        <Redirect to="/dashboard" />
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { updateProfileSubscription })(ProcessPayment)