// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineMail } from 'react-icons/ai'

// Assets
import './style.css'
import ImageEvaluator from '../../../../../assets/images/user-avatar-placeholder.png'

const EvaluationDetailsHeader = ({ fullName, email, avatar, formName, sportName }) => {
    return (
        <header className="page__evaluation__details__header">
            <div className="page__evaluation__details__header__wrapper d-flex flex-column flex-md-row">
                <div className="page__evaluation__details__header__img mx-auto mx-md-0 mr-md-4">
                    {
                        (avatar) ? 
                            <img src={avatar} alt={`${fullName} avatar.`} className="img-fluid rounded rounded-sm"/> :
                            <img src={ImageEvaluator} alt={`${fullName} does not have an avatar.`} className="img-fluid rounded rounded-sm"/>
                    }
                </div>
                <div className="page__evaluation__details__header__title text-center text-md-left">
                    <h3>{fullName}</h3>
                    <div className="mb-2">
                        <AiOutlineMail className="mr-2" /><span>{email}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold" style={{fontSize: '.8rem'}}>Form: </span>
                        <span>{formName}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold" style={{fontSize: '.8rem'}}>Sport: </span>
                        <span>{sportName}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

EvaluationDetailsHeader.propTypes = {
    formName: PropTypes.string.isRequired,
    sportName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default EvaluationDetailsHeader