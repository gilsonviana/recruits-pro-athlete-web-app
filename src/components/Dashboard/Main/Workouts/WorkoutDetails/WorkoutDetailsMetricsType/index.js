import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'

import WorkoutDetailsMetricsFilter from './WorkoutDetailsMetricsFilter'
import WorkoutDetailsMetricsTypeItem from './WorkoutDetailsMetricsTypeItem'

const WorkoutDetailsMetricsType = ({
    categories,
    metrics,
    handleSearch,
    handleFilter
}) => {
    const renderMetricsList = () => {
        return (
                metrics.map((metric, i) => 
                <WorkoutDetailsMetricsTypeItem key={i} index={i} title={metric.name} category={metric.category} instructions={metric.instructions}/>
            )
        )
    }
    return (
        <div className="page__workouts__details__metrics">
            <WorkoutDetailsMetricsFilter categories={categories} handleSearch={handleSearch} handleFilter={handleFilter}/>
            <Accordion>
                {renderMetricsList()}
            </Accordion>
        </div>
    )
}

WorkoutDetailsMetricsType.propTypes = {
    categories: PropTypes.array.isRequired,
    metrics: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default WorkoutDetailsMetricsType