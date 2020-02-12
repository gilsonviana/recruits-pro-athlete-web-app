// Dependencies
import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import EvaluationDetailsOverviewHeader from './EvaluationDetailsOverviewHeader'
import EvaluationDetailsActivity from './EvaluationDetailsActivity'
import EvaluationDetailsMetrics from './EvaluationDetailsMetrics'

const EvaluationDetailsOverview = ({ evaluation, evaluations }) => {
    const [numberOfEvaluations] = useState(() => {
        const evaluatorTotal = evaluations.filter(item => item.userId._id === evaluation.userId._id)
        return evaluatorTotal.length
    })

    return (
        <div className="evaluation-details-overview">
            <EvaluationDetailsOverviewHeader 
                date={evaluation.createdAt}
                numberOfEvaluations={numberOfEvaluations}
                address={evaluation.location.description}
            />
            <EvaluationDetailsActivity />
            <EvaluationDetailsMetrics 
                metrics={evaluation.form.metrics}
            />
        </div>
    )
}

EvaluationDetailsOverview.propTypes = {
    evaluation: PropTypes.object.isRequired,
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations
})

export default connect(mapStateToProps)(EvaluationDetailsOverview)