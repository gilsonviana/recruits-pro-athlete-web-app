// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import MetricsFlush from './MetricsFlush'
import LastEvaluation from './LastEvaluation'

import './style.css'

const Overview = ({ data }) =>  {
    return (
        <div className="page__overview">
            <header className="page__title__bar">
                <div className="d-flex flex-column flex-md-row">
                    <p className="lead">
                        <span className="font-weight-bold">Hi, {data.athleteName || <Skeleton width={100} />}.</span> 
                        <span className="d-block text-muted">
                            {
                                (!data.lastEvaluation) ?
                                    <Skeleton /> :
                                    `${moment(data.lastEvaluation.date).fromNow().slice(0, moment(data.lastEvaluation.date).fromNow().length - 4)} since your last evaluation.`
                            }
                        </span>
                    </p>
                </div>
            </header>
            {/* <Container fluid>
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
                        <LastEvaluation 
                            evaluatorName={data.lastEvaluation.evaluatorName} 
                            date={data.lastEvaluation.date} />
                    </Col>
                    <Col xs={12} md={6} lg={4}></Col>
                    <Col xs={12} md={6} lg={4}></Col>
                </Row>
            </Container> */}
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
    })
}

export default Overview