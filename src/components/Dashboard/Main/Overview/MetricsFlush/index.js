// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiVideo } from 'react-icons/fi'
import { FaWpforms, FaRegNewspaper } from 'react-icons/fa'

// Assets
import './style.css'

const MetricsFlush = ({ evaluations }) => {
    return (
        <Card>
            <Container fluid className="widget__metrics__flush">
                <Row noGutters>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Evaluations</h4>
                            <p className="font-weight-bold">
                                <FaWpforms className="mr-2 text-muted" />{(evaluations.length >= 0) ? evaluations.length : '0'}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Events</h4>
                            <p className="font-weight-bold">
                                <FaRegNewspaper className="mr-2 text-muted" />0
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-center h-100 pt-3">
                            <h4 className="text-muted">Videos</h4>
                            <p className="font-weight-bold">
                                <FiVideo className="mr-2 text-muted"/>0
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

MetricsFlush.propTypes = {
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations
})

export default connect(mapStateToProps)(MetricsFlush)