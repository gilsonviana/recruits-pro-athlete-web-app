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

    return (
        <Link to={`/dashboard/evaluation/${evaluation._id}`} className="text-dark">
            <Card className="widget__last-evaluation shadow-sm pt-3 px-3 mb-5 bg-white rounded">
                <Card.Title>Last evaluation</Card.Title>
                <Card.Body>
                    <div className="d-flex text-muted">
                        <GiWhistle size={20} className="mr-2" />
                        <h5>{evaluation.userId.personal.fullName || <Skeleton width={50}/>}</h5>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 m-0 p-0">
                    <div className="text-right">
                        <p>{(evaluation) && date}</p>
                    </div>
                </Card.Footer>
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