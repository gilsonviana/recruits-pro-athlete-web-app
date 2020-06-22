import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import ImgPlaceholder from '../../../../../assets/images/user-avatar-placeholder.png'

const LastWorkout = ({ workout }) => {
    const workoutDate = moment(workout.createdAt).format('MMM Do, YYYY')

    return (
        <Link to={`/dashboard/workouts/${workout._id}`} className="text-dark">
            <Card className="widget__last-evaluation shadow-sm mb-5 bg-white rounded">
                <div className="d-flex justify-content-between pt-3 px-3" style={{background: 'rgba(0, 236, 0, .4)'}}>
                    <Card.Title>Last workout</Card.Title>
                    <p>{(workoutDate) && workoutDate}</p>
                </div>
                <Card.Body className="d-xl-flex text-center">
                    {
                        workout.evaluatorId.personal.avatarUrl ? 
                        <div className="widget__last-evaluation__avatar bg-light rounded-circle overflow-hidden mx-auto mx-xl-0 mr-xl-4">
                            <img className="img-fluid" src={workout.evaluatorId.personal.avatarUrl} alt={`evaluator`}/>
                        </div> :
                        <div className="widget__last-evaluation__avatar bg-light rounded-circle overflow-hidden mx-auto mx-xl-0 mr-xl-4">
                            <img className="img-fluid" src={ImgPlaceholder} alt={`evaluator`}/>
                        </div>
                    }
                    <div className="text-muted text-center text-lg-left">
                        <h5>{workout.evaluatorId.personal.fullName}</h5>
                        <h6>{workout.name}</h6>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

LastWorkout.protoTypes = {
    workout: PropTypes.object.isRequired
}

export default LastWorkout