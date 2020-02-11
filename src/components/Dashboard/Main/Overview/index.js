// Dependencies
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import OverviewWelcome from './OverviewWelcome'
import MetricsFlush from './MetricsFlush'
import LastEvaluation from './LastEvaluation'

// Redux
import { getMetricFlush } from '../../../../store/profile/actions'

// Assets
import './style.css'

const Overview = ({ token, getMetricFlush }) =>  {
    useEffect(() => {
        getMetricFlush(token)
    }, [token])

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

Overview.propTypes = {
    token: PropTypes.string.isRequired,
    getMetricFlush: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { getMetricFlush })(Overview)