import React from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setProfileSubscriptionRequest, setProfileMeta } from '../../store/profile/actions'

const ProcessPayment = ({ token, setProfileSubscriptionRequest }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        const updateUserProfile = async () => {
            const query = new URLSearchParams(window.location.search)
            const subscriptionId = query.get('subscription_id')
    
            await setProfileSubscriptionRequest(token, subscriptionId)
    
            setIsLoading(false)
        }

        updateUserProfile()
    }, [token, setProfileSubscriptionRequest])

    if (isLoading) {
        return <p>loading....</p>
    }

    return <Redirect to="/create-profile" />
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { setProfileSubscriptionRequest, setProfileMeta })(ProcessPayment)