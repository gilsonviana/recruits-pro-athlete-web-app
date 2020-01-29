// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

// Components
import EvaluationDetailsHeader from './EvaluationDetailsHeader'
import EvaluationDetailsNav from './EvaluationDetailsNav'

const EvaluationDetails = () => {
    return (
        <Container fluid className="page__evaluation__details">
            <EvaluationDetailsHeader />
            <EvaluationDetailsNav />
        </Container>
    )
}

EvaluationDetails.propTypes = {

}

export default EvaluationDetails