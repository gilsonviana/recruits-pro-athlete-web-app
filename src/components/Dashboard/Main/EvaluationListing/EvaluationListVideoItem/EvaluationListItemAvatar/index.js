// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Assets
import './style.css'
import ImgPlaceholder from '../../../../../../assets/images/user-avatar-placeholder.png'
import { FaVideo } from 'react-icons/fa'

const EvaluationListItemAvatar = ({ avatarUrl }) => {

    return (
        <div className="evaluation-list-item-avatar mr-3">
            <div className="evaluation-list-item-avatar__wrapper">
                <FaVideo size={`1.3rem`}/>
            </div>
            {avatarUrl ? 
                <img className="evaluation-list-item-avatar__img rounded rounded-sm" alt="Evaluator" src={avatarUrl}/> :
                <img className="evaluation-list-item-avatar__img rounded rounded-sm" alt="Not available" src={ImgPlaceholder}/>
            }
        </div>
    )
}

EvaluationListItemAvatar.propTypes = {
    avatarUrl: PropTypes.string,
}

export default EvaluationListItemAvatar