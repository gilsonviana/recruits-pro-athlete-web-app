// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import EvaluationDetailsChart from './EvaluationDetailsChart'
import EvaluationDetailsChartSummary from './EvaluationDetailsChartSummary'

const EvaluationDetailsActivity = ({ metricName, evaluations }) => {
    return (
        <div className="evaluation-details-activity mt-4">
            <Row>
                <Col xl={8}>
                    <EvaluationDetailsChart metricName={metricName} evaluations={evaluations}/>
                </Col>
                <Col xl={4}>
                    {/* <EvaluationDetailsChartSummary /> */}
                </Col>
            </Row>
        </div>
    )
}

EvaluationDetailsActivity.propTypes = {
    metric: PropTypes.object
}

export default EvaluationDetailsActivity