// Dependencies
import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'

// Redux
import { setSubscriptionRequest } from '../../store/subscription/actions'

const ProcessPayment = ({ token, setSubscriptionRequest }) => {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const updateUserProfile = async () => {
            const query = new URLSearchParams(window.location.search)
            const subscriptionId = query.get('subscription_id')
    
            await setSubscriptionRequest(token, subscriptionId)
    
            setIsLoading(false)
        }

        updateUserProfile()
    }, [token])

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

ProcessPayment.propTypes = {
    token: PropTypes.string.isRequired,
    setSubscriptionRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { setSubscriptionRequest })(ProcessPayment)