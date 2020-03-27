// Dependencies
import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import EvaluationDetailsOverviewHeader from './EvaluationDetailsOverviewHeader'
import EvaluationDetailsActivity from './EvaluationDetailsActivity'
import EvaluationDetailsMetrics from './EvaluationDetailsMetrics'

const EvaluationDetailsOverview = ({ evaluation, evaluations }) => {
    const [activityMetric, setActivityMetric] = useState({
        _id: '',
        name: '',
        category: '',
        value: ''     
    })

    const [numberOfEvaluations] = useState(() => {
        const evaluatorTotal = evaluations.filter(item => item.evaluatorId._id === evaluation.evaluatorId._id)
        return evaluatorTotal.length
    })

    const handleOnMetricSelect = (id = '') => {
        setActivityMetric(evaluation.form.metrics.filter(metric => metric._id === id)[0])
    }

    return (
        <div className="evaluation-details-overview">
            <EvaluationDetailsOverviewHeader 
                date={evaluation.createdAt}
                numberOfEvaluations={numberOfEvaluations}
                address={evaluation.location.description}
            />
            <EvaluationDetailsActivity metric={activityMetric}/>
            <EvaluationDetailsMetrics 
                metrics={evaluation.form.metrics}
                handleSelect={handleOnMetricSelect}
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