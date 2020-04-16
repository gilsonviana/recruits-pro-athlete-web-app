import React from 'react'
import PropTypes from 'prop-types'
import { FiExternalLink } from 'react-icons/fi'
import ReactTooltip from 'react-tooltip'
import Button from 'react-bootstrap/Button'

const WorkoutDetailsVideoType = ({
    videoLink,
    notes
}) => {
    return (
        <div className="page__workouts__details__video lead">
            <h5 className="text-secondary">Instructions:</h5>
            <p>{notes}</p>
            <div data-tip="External video link" data-iscapture="true" className="d-inline">
                <Button as="a" href={videoLink} variant="success" target="_blank" rel="nofollow noopener">Click to watch video workout <FiExternalLink /></Button>
            </div>
            <ReactTooltip place="top" type="dark" effect="float"/>
        </div>
    )
}

WorkoutDetailsVideoType.propTypes = {
    videoLink: PropTypes.string.isRequired,
    notes: PropTypes.string
}

export default WorkoutDetailsVideoType