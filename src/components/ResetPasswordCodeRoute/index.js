import React from "react"
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from 'prop-types'

const ResetPasswordCodeRoute = ({ code, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => (
                (code) ? (
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

ResetPasswordCodeRoute.propTypes = {
    code: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    code: state.auth.code
})

export default connect(mapStateToProps)(ResetPasswordCodeRoute)