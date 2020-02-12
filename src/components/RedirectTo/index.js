// Dependencies
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const RedirectTo = ({ isCompleted }) => {
    const [routeName, setRouteName] = useState(null)

    useEffect(() => {
        if (isCompleted) {
            setRouteName('/dashboard')
            return
        }
        
        setRouteName('/create-profile')

    }, [isCompleted])
    
    if (!routeName) {
        return <></>
    }

    return <Redirect to={routeName} />
}

RedirectTo.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
    isCompleted: state.profile.meta.isCompleted
})

export default connect(mapStateToProps)(RedirectTo)