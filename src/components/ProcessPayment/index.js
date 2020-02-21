// Dependencies
import React from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'

// Redux
import { setProfileSubscriptionRequest } from '../../store/profile/actions'

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
        return (
            <div className="page__overlay__loading">
                <Loader
                    type="Oval"
                    color="#00FF00"
                    height={100}
                    width={100}
                />
            </div>
        )
    }

    return <Redirect to="/create-profile" />
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { setProfileSubscriptionRequest })(ProcessPayment)