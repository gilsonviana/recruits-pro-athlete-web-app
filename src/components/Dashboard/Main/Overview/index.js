// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import OverviewWelcome from './OverviewWelcome'
import MetricsFlush from './MetricsFlush'
import LastEvaluation from './LastEvaluation'

const Overview = () =>  {
    return (
        <div className="page__overview">
            <OverviewWelcome />
            <Container fluid>
                <Row className="mb-4">
                    <Col>
                        <MetricsFlush />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <LastEvaluation />
                    </Col>
                    <Col xs={12} md={6} lg={4}></Col>
                    <Col xs={12} md={6} lg={4}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Overview