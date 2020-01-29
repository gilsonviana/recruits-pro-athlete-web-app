import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineMail } from 'react-icons/ai'

const EvaluationDetailsHeader = () => {
    return (
        <header className="page__evaluation__details__header">
            <div className="page__evaluation__details__header__wrapper d-flex flex-row">
                {/* <img src="" alt="" className="page__evaluation__details__header__img"/> */}
                <div className="page__evaluation__details__header__title">
                    <h3>Tim Sams</h3>
                    <AiOutlineMail /><span>tim@recruitspro.com</span>
                </div>
            </div>
        </header>
    )
}

EvaluationDetailsHeader.propTypes = {

}

export default EvaluationDetailsHeader