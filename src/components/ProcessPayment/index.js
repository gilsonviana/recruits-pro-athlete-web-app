import React from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProfileSubscription, setProfileIsCompleted } from '../../store/profile/actions'

const ProcessPayment = ({ token, updateProfileSubscription, setProfileIsCompleted }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        const updateUserProfile = async () => {
            const query = new URLSearchParams(window.location.search)
            const subscriptionId = query.get('subscription_id')
    
            await updateProfileSubscription(token, subscriptionId)
            await setProfileIsCompleted(token)
    
            setIsLoading(false)
        }

        updateUserProfile()
    }, [token, setProfileIsCompleted, updateProfileSubscription])

    if (isLoading) {
        return <p>loading....</p>
    }

    return <Redirect to="/dashboard" />
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { updateProfileSubscription, setProfileIsCompleted })(ProcessPayment)