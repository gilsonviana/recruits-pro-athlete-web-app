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

const EvaluationListing = ({ evaluations }) => {
    const [evaluationsState, setEvaluationsState] = useState(null)

    useEffect(() => {
        const populateEvaluationsState = () => {
            setEvaluationsState([...evaluations])
        }

        populateEvaluationsState()
    }, [evaluations])

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
            <Container fluid>
                <Row noGutters>
                    <Col>
                        <Card className="shadow-sm pt-3 px-3 mb-5 bg-white rounded">
                            <Card.Title>Evaluations</Card.Title>
                            <Card.Body>
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
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations
})

export default connect(mapStateToProps)(EvaluationListing)