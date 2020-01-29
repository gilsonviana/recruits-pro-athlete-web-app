// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import OverviewWelcome from './OverviewWelcome'
import MetricsFlush from './MetricsFlush'
import LastEvaluation from './LastEvaluation'

import './style.css'

const Overview = ({ data }) =>  {
    return (
        <div className="page__overview">
            <OverviewWelcome 
                athleteName={data.athleteName} 
                date={data.lastEvaluation.date}/>
            <Container fluid>
                <Row className="mb-4">
                    <Col>
                        <MetricsFlush 
                            evaluationsNumber={data.evaluationsNumber} 
                            eventsNumber={data.eventsNumber} 
                            videosNumber={data.videosNumber} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <LastEvaluation data={data.lastEvaluation} />
                    </Col>
                    <Col xs={12} md={6} lg={4}></Col>
                    <Col xs={12} md={6} lg={4}></Col>
                </Row>
            </Container>
        </div>
    )
}

Overview.propTypes = {
    data: PropTypes.shape({
        athleteName: PropTypes.string.isRequired,
        evaluationsNumber: PropTypes.number.isRequired,
        eventsNumber: PropTypes.number.isRequired,
        videosNumber: PropTypes.number.isRequired,
        lastEvaluation: PropTypes.shape({
            evaluatorName: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        })
    }).isRequired
}

export default Overview