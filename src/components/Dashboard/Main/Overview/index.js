// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import OverviewWelcome from './OverviewWelcome'
import MetricsFlush from './MetricsFlush'
import LastEvaluation from './LastEvaluation'
import MarketingBanner from '../MarketingBanner'

const Overview = ({ evaluations, subscriptionStatus }) =>  {
    return (
        <div className="page__overview">
            {
                subscriptionStatus !== 'ACTIVE' && <MarketingBanner />
            }
            <OverviewWelcome />
            <Container fluid>
                <Row className="mb-4">
                    <Col>
                        <MetricsFlush />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        {(evaluations.length > 0) && <LastEvaluation />}
                    </Col>
                    <Col xs={12} md={6} lg={4}></Col>
                    <Col xs={12} md={6} lg={4}></Col>
                </Row>
            </Container>
        </div>
    )
}

Overview.propTypes = {
    evaluations: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations,
    subscriptionStatus: state.profile.subscription.status
})

export default connect(mapStateToProps)(Overview)