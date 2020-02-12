// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineMail } from 'react-icons/ai'

// Assets
import './style.css'

// TODO Need image placeholder case no valid image to display
import ImageEvaluator from '../../../../../assets/images/Ur4_0bmw.png'

const EvaluationDetailsHeader = ({ fullName, email, avatar }) => {
    return (
        <header className="page__evaluation__details__header">
            <div className="page__evaluation__details__header__wrapper d-flex flex-column flex-md-row">
                <div className="page__evaluation__details__header__img mx-auto mx-md-0 mr-md-4">
                    {
                        (avatar) ? 
                            <img src={avatar} alt="Evaluator" alt={`${fullName} avatar.`} className="img-fluid rounded-sm"/> :
                            <img src={ImageEvaluator} alt={`${fullName} does not have an avatar picture.`} className="img-fluid rounded-sm"/>
                    }
                </div>
                <div className="page__evaluation__details__header__title text-center text-md-left">
                    <h3>{fullName}</h3>
                    <AiOutlineMail className="mr-2" /><span>{email}</span>
                </div>
            </div>
        </header>
    )
}

EvaluationDetailsHeader.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default EvaluationDetailsHeader