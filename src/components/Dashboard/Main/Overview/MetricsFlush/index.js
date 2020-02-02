// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiVideo } from 'react-icons/fi'
import { FaWpforms, FaRegNewspaper } from 'react-icons/fa'

import './style.css'

const MetricsFlush = ({ evaluationsNumber, eventsNumber, videosNumber }) => {
    return (
        <Card>
            <Container fluid className="widget__metrics__flush">
                <Row noGutters>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Evaluations</h4>
                            <p className="font-weight-bold">
                                <FaWpforms className="mr-2 text-muted" />{evaluationsNumber || <Skeleton width={20}/>}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Events</h4>
                            <p className="font-weight-bold">
                                <FaRegNewspaper className="mr-2 text-muted" />{eventsNumber || <Skeleton width={20}/>}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3">
                            <h4 className="text-muted">Videos</h4>
                            <p className="font-weight-bold">
                                <FiVideo className="mr-2 text-muted"/>{videosNumber || <Skeleton width={20}/>}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

MetricsFlush.propTypes = {
    evaluationsNumber: PropTypes.number.isRequired,
    eventsNumber: PropTypes.number.isRequired,
    videosNumber: PropTypes.number.isRequired
}

export default MetricsFlush