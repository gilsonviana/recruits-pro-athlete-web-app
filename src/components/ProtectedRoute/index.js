import React from "react"
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from 'prop-types'

const ProtectedRoute = ({ token, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => (
                (false) ? (
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

ProtectedRoute.propTypes = {
    token: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    // token: state.auth.token
})

export default connect(mapStateToProps)(ProtectedRoute)