// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const EvaluationDetailsNotes = ({ notes }) => {
    return (
        <div className="evaluation-details-notes">
            <p>{notes}</p>
        </div>
    )
}

EvaluationDetailsNotes.propTypes = {
    notes: PropTypes.string.isRequired
}

export default EvaluationDetailsNotes