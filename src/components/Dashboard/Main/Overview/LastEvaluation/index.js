import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import Skeleton from "react-loading-skeleton";
import Card from 'react-bootstrap/Card'
import { GiWhistle } from "react-icons/gi";
import moment from 'moment'

const LastEvaluation = ({ evaluation }) => {
    const date = moment(evaluation.createdAt).format('MMM Do, YYYY')
    console.log(evaluation);
    
    return (
        <Link to={`/dashboard/evaluation/${evaluation._id}`} className="text-dark">
            <Card className="widget__last-evaluation shadow-sm mb-5 bg-white rounded">
                <div className="d-flex justify-content-between pt-3 px-3" style={{background: 'rgba(0, 236, 0, .4)'}}>
                    <Card.Title>Last evaluation</Card.Title>
                    <p>{(evaluation) && date}</p>
                </div>
                <Card.Body>
                    <div className="d-flex text-muted">
                        <GiWhistle size={20} className="mr-2" />
                        <h5>{evaluation.evaluatorId.personal.fullName || <Skeleton width={50}/>}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

LastEvaluation.propTypes = {
    evaluation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    evaluation: state.profile.evaluations[state.profile.evaluations.length - 1]
})

export default connect(mapStateToProps)(LastEvaluation)