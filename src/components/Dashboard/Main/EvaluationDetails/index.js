// Dependencies
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

// Components
import EvaluationDetailsHeader from './EvaluationDetailsHeader'
import EvaluationDetailsNav from './EvaluationDetailsNav'

const EvaluationDetails = ({ evaluations }) => {
    const [evaluation, setEvaluation] = useState(null)

    useEffect(() => {
        const pathName = window.location.pathname.split('/')
        const evaluationId = pathName[pathName.length - 1]

        const getEvaluationById = (id) => {
            setEvaluation(...evaluations.filter(evaluation => evaluation._id === id))
        }

        getEvaluationById(evaluationId)
    }, [evaluations])

    if (!evaluation) {
        return <></>
    }

    return (
        <Container fluid className="page__evaluation__details">
            <EvaluationDetailsHeader 
                avatar={evaluation.userId.personal.avatarUrl} 
                fullName={evaluation.userId.personal.fullName} 
                email={evaluation.userId.personal.email}/>
            <EvaluationDetailsNav evaluation={evaluation}/>
        </Container>
    )
}

EvaluationDetails.propTypes = {
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.evaluations
})

export default connect(mapStateToProps)(EvaluationDetails)