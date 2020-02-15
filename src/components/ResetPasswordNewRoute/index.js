import React from "react"
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from 'prop-types'

const ResetPasswordNewRoute = ({ resetToken, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => (
                (resetToken) ? (
                    children
                ) : (
                    <Redirect 
                      to={{
                          pathname: '/login',
                          state: { from: location }
                      }}  
                    />
                )
            )}
        />
    )
}

ResetPasswordNewRoute.propTypes = {
    resetToken: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    resetToken: state.auth.resetToken
})

export default connect(mapStateToProps)(ResetPasswordNewRoute)