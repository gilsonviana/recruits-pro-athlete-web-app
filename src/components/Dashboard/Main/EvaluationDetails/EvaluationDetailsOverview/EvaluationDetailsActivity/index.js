// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import EvaluationDetailsChart from './EvaluationDetailsChart'
import EvaluationDetailsChartSummary from './EvaluationDetailsChartSummary'

const EvaluationDetailsActivity = ({ metric }) => {
    return (
        <div className="evaluation-details-activity mt-4">
            <Row>
                <Col xs={12} md={6} lg={8}>
                    <EvaluationDetailsChart metric={metric}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
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