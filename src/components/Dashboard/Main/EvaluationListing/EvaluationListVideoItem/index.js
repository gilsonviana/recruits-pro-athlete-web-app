// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Media from 'react-bootstrap/Media' 
import moment from 'moment'

// Components
import EvaluationListItemAvatar from './EvaluationListItemAvatar'

const EvaluationListVideoItem = ({
    id,
    fullName,
    date,
    avatar,
}) => {
    return (
        <Media className="evaluation-list-item mb-4">
            <Link to={`/dashboard/video-evaluation/${id}`} className="text-dark">
                <EvaluationListItemAvatar avatarUrl={avatar} />
            </Link>
            <Media.Body>
                <Link to={`/dashboard/evaluation/${id}`} className="text-dark">
                    <h6 className="font-weight-bold d-inline-block">{fullName}</h6>
                </Link>
                <p className="text-secondary">{moment(date).format('MMM Do, YYYY')}</p>
            </Media.Body>
        </Media>
    )
}

EvaluationListVideoItem.propTypes = {
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default EvaluationListVideoItem