// Dependencies
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import EvaluationDetailsChart from './EvaluationDetailsChart'
import EvaluationDetailsChartSummary from './EvaluationDetailsChartSummary'

const EvaluationDetailsActivity = () => {
    return (
        <div className="evaluation-details-activity mt-4">
            <Row>
                <Col xs={12} md={6} lg={8}>
                    <EvaluationDetailsChart />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <EvaluationDetailsChartSummary />
                </Col>
            </Row>
        </div>
    )
}

export default EvaluationDetailsActivity