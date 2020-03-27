// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { FaMapMarkerAlt } from 'react-icons/fa'
import moment from 'moment'

// Assets
import './style.css'
import avatarPlaceholder from '../../../../../../assets/images/user-avatar-placeholder.png'

const PublicProfileSingleMainEvaluationsItem = ({ evaluation }) => {
    const [showMetrics, setShowMetrics] = useState(false)
    const address = evaluation.location.hasOwnProperty('description') ? evaluation.location.description : ''
    const date = moment(new Date(evaluation.createdAt)).format('MMMM Do YYYY')

    return (
        <div className="public-profile__single-main__evaluations__item mb-4">
            <Card>
                <Card.Body>
                    <div className="media">
                        {evaluation.evaluatorId.personal.avatarUrl ? 
                            <img className="public-profile__evaluations__card__header__img" src={evaluation.evaluatorId.personal.avatarUrl} alt={`coach ${evaluation.evaluatorId.personal.fullName}`}/> :
                            <img className="public-profile__evaluations__card__header__img" src={avatarPlaceholder} alt={`coach ${evaluation.evaluatorId.personal.avatarUrl} has no avatar`}/>
                        }
                        <div className="media-body">
                            <p className="m-0"><b>{evaluation.evaluatorId.personal.fullName}</b>, <FaMapMarkerAlt /> <b>{address}</b></p>
                            <p className="m-0 mb-4 text-muted">{date}</p>
                            <Button onClick={() => setShowMetrics(!showMetrics)} variant="light" className="public-profile__single-main__evaluations__item__button text-success">Metrics</Button>
                        </div>
                    </div>
                    {showMetrics && <Table className="mt-2 bg-light" hover size="sm" borderless>
                        <thead>
                            <tr>
                                <th>Metric</th>
                                <th>Category</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                evaluation.form.metrics.map(metric => 
                                    <tr className="border-top" key={metric._id}>
                                        <td>{metric.name}</td>
                                        <td>{metric.category}</td>
                                        <td>{metric.value}</td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </Table>}
                </Card.Body>
            </Card>
        </div>
    )
}

PublicProfileSingleMainEvaluationsItem.propTypes = {
    evaluation: PropTypes.object.isRequired
}

export default PublicProfileSingleMainEvaluationsItem