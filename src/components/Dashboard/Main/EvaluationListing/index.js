// Dependencies
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Components
import EvaluationSearchBar from './EvaluationSearchBar'
import EvaluationListItem from './EvaluationListItem'
import MarketingBanner from '../MarketingBanner'

const EvaluationListing = ({ evaluations, subscriptionStatus }) => {
    const [evaluationsState, setEvaluationsState] = useState(null)

    useEffect(() => {
        const populateEvaluationsState = () => {
            if (evaluations.length >= 1 && subscriptionStatus !== 'ACTIVE') {
                setEvaluationsState([evaluations[evaluations.length - 1]])
                return                
            }
            setEvaluationsState([...evaluations])
        }

        populateEvaluationsState()
    }, [evaluations, subscriptionStatus])

    const handleSearch = (e) => {
        const { target } = e

        setEvaluationsState([...evaluations.filter(evaluation => evaluation.userId.personal.fullName.indexOf(target.value) >= 0)])
    }

    const handleSearchFilter = (filter = {
        dateFrom: '',
        dateTo: '',
        sport: ''
    }) => {
        const { dateFrom, dateTo, sport } = filter

        setEvaluationsState([...evaluations.filter(evaluation => {
            let date = new Date(evaluation.createdAt)
            if (sport) {
                return date >= dateFrom && date <= dateTo && evaluation.form.sport === sport
            }

            if (dateFrom && !dateTo) {
                return date >= dateFrom
            }

            if (dateFrom && dateTo) {
                return date >= filter.dateFrom && date <= filter.dateTo
            }

            return true
        })])
    }

    if (!evaluationsState) {
        return <></>
    }

    return (
        <div className="page__evaluation__listing">
        {
            subscriptionStatus !== 'ACTIVE' && 
                <MarketingBanner 
                    title="Do more with Athletes Pro" 
                    text={`
                        Boost your profile with unlimited video uploads, social media integration, 
                        contact references and more by subscribing to Athletes Pro.
                    `} />
        }
            <Container fluid>
                <Row noGutters>
                    <Col>
                        <Card className="shadow-sm pt-3 px-3 mb-5 bg-white rounded">
                            <Card.Body>
                            <h5 className="font-weight-bold">Evaluations</h5>
                            <p className="lead">
                                Track your performance and read insightful notes from coaches and trainers.
                            </p>
                            {evaluations.length >= 1 && subscriptionStatus !== 'ACTIVE' && <span className="text-danger font-weight-bold lead d-block mb-4">You have reached the limit of evaluations you can see.</span>}
                            <EvaluationSearchBar handleOnChange={handleSearch} handleFilter={handleSearchFilter}/>
                            {
                                (evaluationsState.length > 0) ?
                                evaluationsState.sort((a, b) => {
                                    let x = new Date(b.createdAt), 
                                        y = new Date(a.createdAt)
                                    return y > x ? - 1 : y < x ? 1 : 0
                                }).map(evaluation => 
                                    <EvaluationListItem 
                                        key={evaluation._id} 
                                        id={evaluation._id} 
                                        fullName={evaluation.userId.personal.fullName} 
                                        date={evaluation.createdAt} 
                                        sportCategory={evaluation.form.sport}
                                        avatar={evaluation.userId.personal.avatarUrl}/>)  
                                : <p>No evaluation matches the criteria.</p>
                            }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

EvaluationListing.propTypes = {
    evaluations: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations,
    subscriptionStatus: state.profile.subscription.status
})

export default connect(mapStateToProps)(EvaluationListing)