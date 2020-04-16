import React from 'react'
import PropTypes from 'prop-types'

const WorkoutDetailsMetricsType = ({
    categories,
    metrics
}) => {
    return (
        <div className="page__workouts__details__video">
            {/* page__workouts__details__video */}
        </div>
    )
}

WorkoutDetailsMetricsType.propTypes = {
    categories: PropTypes.array.isRequired,
    metrics: PropTypes.array.isRequired
}

export default WorkoutDetailsMetricsType