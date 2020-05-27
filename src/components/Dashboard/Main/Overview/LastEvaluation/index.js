import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import Skeleton from "react-loading-skeleton";
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import ImgPlaceholder from '../../../../../assets/images/user-avatar-placeholder.png'

import './style.css'

const LastEvaluation = ({ evaluation }) => {
    const evaluationDate = moment(evaluation.createdAt).format('MMM Do, YYYY')

    return (
        <Link to={`/dashboard/evaluation/${evaluation._id}`} className="text-dark">
            <Card className="widget__last-evaluation shadow-sm mb-5 bg-white rounded">
                <div className="d-flex justify-content-between pt-3 px-3" style={{background: 'rgba(0, 236, 0, .4)'}}>
                    <Card.Title>Last evaluation</Card.Title>
                    <p>{(evaluationDate) && evaluationDate}</p>
                </div>
                <Card.Body className="d-xl-flex text-center">
                    {
                        evaluation.evaluatorId.personal.avatarUrl ? 
                        <div className="widget__last-evaluation__avatar bg-light rounded-circle overflow-hidden mx-auto mx-xl-0 mr-xl-4">
                            <img className="img-fluid" src={evaluation.evaluatorId.personal.avatarUrl} alt={`evaluator`}/>
                        </div> :
                        <div className="widget__last-evaluation__avatar bg-light rounded-circle overflow-hidden mx-auto mx-xl-0 mr-xl-4">
                            <img className="img-fluid" src={ImgPlaceholder} alt={`evaluator`}/>
                        </div>
                    }
                    <div className="text-muted text-center text-lg-left">
                        <h5>{evaluation.evaluatorId.personal.fullName || <Skeleton width={50}/>}</h5>
                        <h6>{evaluation.form.name}</h6>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

LastEvaluation.propTypes = {
    // evaluation: PropTypes.shape({
    //     _id: '',
    //     athleteId: '',
    //     createdAt: '',
    //     form: {
    //         name: ''
    //     },  
    //     evaluatorId: {
    //         personal: {
    //             avatarUrl: '',
    //             fullName: ''
    //         }
    //     }

    // })
    evaluation: PropTypes.object.isRequired
}

export default LastEvaluation