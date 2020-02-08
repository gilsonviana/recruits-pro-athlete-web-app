// Dependencies
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const RedirectTo = ({ isCompleted }) => {
    const [route, setRoute] = useState(null)

    useEffect(() => {
        if (isCompleted) {
            setRoute('/dashboard')
            return
        }
        
        setRoute('/create-profile')

    }, [isCompleted])
    
    if (!route) {
        return <></>
    }

    return <Redirect to={route} />
}

RedirectTo.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
    isCompleted: state.profile.meta.isCompleted
})

export default connect(mapStateToProps)(RedirectTo)