// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { getRankingByFormId } from '../../../../../services/ranking'

import AvatarPlaceholder from '../../../../../assets/images/user-avatar-placeholder.png'

import './style.css'

const EvaluationDetailsRank = ({ form, token, fullName }) => {
    const [rankingState, setRankingState] = useState(null)
    const [selectedMetric, setSelectedMetric] = useState(null)

    useEffect(() => {
        const setRanking = async () => {
            try {
                const { ranking } = await getRankingByFormId(token, form._id)
    
                setRankingState(ranking)
            } catch (e) {
                setRankingState(false)
            }
        }

        if (form._id) {
            setRanking()
        }
    }, [])

    const getRankingByMetricName = (metricName = '') => {      
        setSelectedMetric(rankingState.map(rank => {
            return {
                ...rank,
                form: {
                    ...rank.form,
                    metrics: [
                        ...rank.form.metrics.filter(metric => metric.name === metricName)
                    ]
                }
            }
        }).filter(rank => rank.form.metrics.length > 0).sort((a, b) => {
            return b.form.metrics[0].value - a.form.metrics[0].value
        }))
    }

    const renderMetrics = () => {
        return (
            <Table responsive="md" hover size="sm">
                <thead>
                    <tr className="font-weight-bold">
                        <td>Metric name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        form.metrics.map((metric, i) => 
                            <tr style={{cursor: 'pointer'}} onClick={() => getRankingByMetricName(metric.name)} key={`evaluation-detail-metric-${i}`}>
                                <td>{metric.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }

    const renderRanking = () => {
        if (selectedMetric) {
            return (
                <Table responsive="md" size="sm">
                    <thead>
                        <tr className="font-weight-bold">
                            <td></td>
                            <td>Name</td>
                            <td>Value</td>
                            <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedMetric.map((rank, i) => 
                                (rank.form.metrics.length > 0) &&
                                    <tr 
                                        key={`evaluation-detail-rank-${i}`}
                                        className="evaluation-details-rank-table-row"
                                        style={
                                            (rank.athleteId.personal.fullName === fullName) ?
                                            {background: "#0feb02"} :
                                            {}
                                        }
                                    >
                                        <td className="evaluation-details-rank-table-col__img">
                                            {
                                                (rank.athleteId.personal.avatarUrl) ? 
                                                <img src={rank.athleteId.personal.avatarUrl} className="evaluation-details-rank-table-col__img__element"/> :
                                                <img src={AvatarPlaceholder} className="evaluation-details-rank-table-col__img__element"/>
                                            }
                                        </td>
                                        <td>{rank.athleteId.personal.fullName}</td>
                                        <td>{rank.form.metrics[0].value}</td>
                                        <td>{i + 1}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            )
        }

        if (selectedMetric === null) {
            return (
                <div className="lead">
                    <p className="text-muted">Choose a metric</p>
                </div>
            )
        }

        return (
            <div className="lead">
                <p className="text-muted">No ranking exist for this form yet.</p>
            </div>
        )
    }

    return (
        <div className="evaluation-details-rank">
            <h5 className="font-weight-bold">Evaluation Ranking</h5>
            <p className="lead">
                See how you are ranking among other athletes using the same metric form.
            </p>
            <Container fluid>
                <Row>
                    <Col lg={4}>
                    {
                        renderMetrics()
                    }
                    </Col>
                    <Col>
                    {
                        renderRanking()
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

EvaluationDetailsRank.propTypes = {
    token: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    fullName: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    fullName: state.profile.personal.fullName
})

export default connect(mapStateToProps)(EvaluationDetailsRank)