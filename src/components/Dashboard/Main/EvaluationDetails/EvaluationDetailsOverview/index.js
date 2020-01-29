// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import EvaluationDetailsOverviewHeader from './EvaluationDetailsOverviewHeader'
import EvaluationDetailsActivity from './EvaluationDetailsActivity'
import EvaluationDetailsMetrics from './EvaluationDetailsMetrics'

const EvaluationDetailsOverview = () => {
    return (
        <div className="evaluation-details-overview">
            <EvaluationDetailsOverviewHeader />
            <EvaluationDetailsActivity />
            <EvaluationDetailsMetrics />
        </div>
    )
}

EvaluationDetailsOverview.propTypes = {

}

export default EvaluationDetailsOverview