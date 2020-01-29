// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaRegCalendarAlt, FaWpforms } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'

import './style.css'

const EvaluationDetailsOverviewHeader = () => {
    return (
       <Card className="evaluation-details-overview-header">
            <Container fluid>
                <Row noGutters>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 border-right border-grey py-3">
                            <h4 className="text-muted">Date</h4>
                            <p className="font-weight-bold m-0">
                                <FaRegCalendarAlt className="mr-2 text-muted" />Feb 2th
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 border-right border-grey py-3">
                            <h4 className="text-muted">Location</h4>
                            <p className="font-weight-bold m-0">
                                <FiMapPin className="mr-2 text-muted" />2401 Lakeshore
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 border-0 border-grey py-3">
                            <h4 className="text-muted">Total evaluations</h4>
                            <p className="font-weight-bold m-0">
                                <FaWpforms className="mr-2 text-muted" />2
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
       </Card>
    )
}

export default EvaluationDetailsOverviewHeader