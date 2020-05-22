import React from 'react'
import PropTypes from 'prop-types'
import { FiExternalLink } from 'react-icons/fi'
import ReactTooltip from 'react-tooltip'
import Button from 'react-bootstrap/Button'

const EvaluationDetailsBody = ({
    videoUrl,
    notes
}) => {
    return (
        <div className="lead mt-4">
            <ReactTooltip place="top" type="dark" effect="float"/>
            <div data-tip="External video link" data-iscapture="true" className="d-inline">
                <Button className="text-dark" as="a" href={videoUrl} variant="success" target="_blank" rel="nofollow noopener" style={{backgroundColor: '#00EC00', border: 'none'}}>Click to watch video workout <FiExternalLink /></Button>
            </div>
            <h5 className="text-secondary mt-4">Notes:</h5>
            <p>{notes[0]}</p>
        </div>
    )
}

EvaluationDetailsBody.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    notes: PropTypes.array
}

export default EvaluationDetailsBody