// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiVideo } from 'react-icons/fi'
import { FaWpforms, FaDumbbell } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'

// Assets
import './style.css'

const MetricsFlush = ({ evaluations, videos, workouts }) => {
    return (
        <Card>
            <Container fluid className="widget__metrics__flush">
                <Row noGutters>
                    <Col xs={12} md={4}>
                        <div data-tip="Total number of evaluations." data-iscapture="true" className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Evaluations</h4>
                            <p className="font-weight-bold">
                                <FaWpforms className="mr-2 text-muted" />{(evaluations.length > 0) ? evaluations.length : '0'}
                            </p>
                        </div>
                        <ReactTooltip place="top" type="dark" effect="float"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <div data-tip="Total number of workouts shared with you." data-iscapture="true" className="text-center h-100 pt-3 border-right border-grey">
                            <h4 className="text-muted">Workouts</h4>
                            <p className="font-weight-bold">
                                <FaDumbbell className="mr-2 text-muted" />{workouts.length > 0 ? workouts.length : '0'}
                            </p>
                        </div>
                        <ReactTooltip place="top" type="dark" effect="float"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <div data-tip="Total number of videos in your profile." data-iscapture="true" className="text-center h-100 pt-3">
                            <h4 className="text-muted">Videos</h4>
                            <p className="font-weight-bold">
                                <FiVideo className="mr-2 text-muted"/>{videos.length > 0 ? videos.length : '0'}
                            </p>
                        </div>
                        <ReactTooltip place="top" type="dark" effect="float"/>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

MetricsFlush.propTypes = {
    evaluations: PropTypes.array.isRequired,
    workouts: PropTypes.array.isRequired,
    videos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations,
    workouts: state.profile.workouts,
    videos: state.profile.videos
})

export default connect(mapStateToProps)(MetricsFlush)