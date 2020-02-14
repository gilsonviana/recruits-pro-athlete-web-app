// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Assets
import './style.css'
import ImgPlaceholder from '../../../../../../assets/images/user-avatar-placeholder.png'
import BaseballIcon from '../../../../../../assets/images/baseball-icon.png'
import BasketballIcon from '../../../../../../assets/images/basketball-icon.png'
import FootballIcon from '../../../../../../assets/images/football-icon.png'
import SoccerIcon from '../../../../../../assets/images/soccer-icon.png'

const EvaluationListItemAvatar = ({ avatarUrl, sport }) => {

    return (
        <div className="evaluation-list-item-avatar mr-3">
            {
                (sport === 'baseball') ?
                    <div className="evaluation-list-item-avatar__wrapper">
                        <img className="evaluation-list-item-avatar__icon" src={BaseballIcon} alt={`${sport} type`}/>
                    </div> :
                (sport === 'basketball') ?
                    <div className="evaluation-list-item-avatar__wrapper">
                        <img className="evaluation-list-item-avatar__icon" src={BasketballIcon} alt={`${sport} type`}/>
                    </div> :
                (sport === 'football') ?
                    <div className="evaluation-list-item-avatar__wrapper">
                        <img className="evaluation-list-item-avatar__icon" src={FootballIcon} alt={`${sport} type`}/>
                    </div> :
                    <div className="evaluation-list-item-avatar__wrapper">
                        <img className="evaluation-list-item-avatar__icon" src={SoccerIcon} alt={`${sport} type`}/>
                    </div>
            }
            {avatarUrl ? 
                <img className="evaluation-list-item-avatar__img rounded rounded-sm" alt="Evaluator" src={avatarUrl}/> :
                <img className="evaluation-list-item-avatar__img rounded rounded-sm" alt="Not available" src={ImgPlaceholder}/>
            }
        </div>
    )
}

EvaluationListItemAvatar.propTypes = {
    avatarUrl: PropTypes.string,
    sport: PropTypes.string.isRequired
}

export default EvaluationListItemAvatar