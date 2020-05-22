// Dependencies
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

// Components
import EvaluationDetailsHeader from './EvaluationDetailsHeader'
import EvaluationDetailsBody from './EvaluationDetailsBody'

const VideoEvaluationDetails = ({ evaluations }) => {
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
                avatar={evaluation.evaluator.personal.avatarUrl} 
                fullName={evaluation.evaluator.personal.fullName} 
                email={evaluation.evaluator.personal.email}
                date={evaluation.createdAt}    
            />
            <EvaluationDetailsBody videoUrl={evaluation.videoUrl} notes={evaluation.notes} />
        </Container>
    )
}

VideoEvaluationDetails.propTypes = {
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    evaluations: state.profile.videoEvaluations
})

export default connect(mapStateToProps)(VideoEvaluationDetails)