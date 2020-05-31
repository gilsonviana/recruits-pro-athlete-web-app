// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const EvaluationDetailsRank = ({ notes }) => {
    return (
        <div className="evaluation-details-rank">
            <p>Ranking</p>
        </div>
    )
}

EvaluationDetailsRank.propTypes = {
    notes: PropTypes.string.isRequired
}

export default EvaluationDetailsRank