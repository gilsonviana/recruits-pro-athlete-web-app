// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const EvaluationDetailsRank = ({ ranking }) => {
    return (
        <div className="evaluation-details-rank">
            <h5 className="font-weight-bold">Evaluation Ranking</h5>
            <p className="lead">
                See how you're ranking among other athletes using the same metric form.
            </p>

        </div>
    )
}

EvaluationDetailsRank.propTypes = {
    ranking: PropTypes.string
}

export default EvaluationDetailsRank