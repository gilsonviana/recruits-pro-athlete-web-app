// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import moment from 'moment'
import { FiExternalLink } from 'react-icons/fi'

// Assets
import './style.css'
import avatarPlaceholder from '../../../../../../assets/images/user-avatar-placeholder.png'

const PublicProfileSingleMainVideoEvaluationsItem = ({ evaluation }) => {
    const [showMetrics, setShowMetrics] = useState(false)
    const date = moment(new Date(evaluation.createdAt)).format('MMMM Do YYYY')

    return (
        <div className="public-profile__single-main__evaluations__item mb-4">
            <Card>
                <Card.Body>
                    <div className="media">
                        {evaluation.evaluator.personal.avatarUrl ? 
                            <img className="public-profile__evaluations__card__header__img" src={evaluation.evaluator.personal.avatarUrl} alt={`coach ${evaluation.evaluator.personal.fullName}`}/> :
                            <img className="public-profile__evaluations__card__header__img" src={avatarPlaceholder} alt={`coach ${evaluation.evaluator.personal.avatarUrl} has no avatar`}/>
                        }
                        <div className="media-body">
                        <p className="m-0"><b>{evaluation.evaluator.personal.fullName}</b></p>
                            <p className="m-0 mb-4 text-muted">{date}</p>
                            <Button as="a" href={evaluation.videoUrl} variant="light" target="_blank" className="public-profile__single-main__evaluations__item__button text-success">Video  <FiExternalLink /></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

PublicProfileSingleMainVideoEvaluationsItem.propTypes = {
    evaluation: PropTypes.object.isRequired
}

export default PublicProfileSingleMainVideoEvaluationsItem