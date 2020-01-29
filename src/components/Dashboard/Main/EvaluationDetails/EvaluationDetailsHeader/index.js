// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineMail } from 'react-icons/ai'

import './style.css'

import ImageEvaluator from '../../../../../assets/images/Ur4_0bmw.png'

const EvaluationDetailsHeader = () => {
    return (
        <header className="page__evaluation__details__header">
            <div className="page__evaluation__details__header__wrapper d-flex flex-column flex-md-row">
                <div className="page__evaluation__details__header__img mx-auto mx-md-0 mr-md-4">
                    <img src={ImageEvaluator} alt="Evaluator" className="img-fluid rounded-sm"/>
                </div>
                <div className="page__evaluation__details__header__title text-center text-md-left">
                    <h3>Tim Sams</h3>
                    <AiOutlineMail className="mr-2" /><span>tim@recruitspro.com</span>
                </div>
            </div>
        </header>
    )
}

EvaluationDetailsHeader.propTypes = {

}

export default EvaluationDetailsHeader