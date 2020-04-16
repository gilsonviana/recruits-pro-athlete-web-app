import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { IoIosVideocam } from 'react-icons/io'
import './style.css'

import avatarPlaceholder from '../../../../../../assets/images/user.png'

const WorkoutsSidebarItem = ({
    avatarUrl,
    title,
    name,
    date,
    type,
    id
}) => {
    const workoutDate = moment(date).format('MMM Do, YYYY')

    return (
        <Link to={`/dashboard/workouts/${id}`} className="text-dark">
            <div className="page__workouts__sidebar__item my-2 px-2">
                <div className="page__workouts__sidebar__item__avatar">
                    {
                        (avatarUrl) ? 
                            <img src={avatarUrl} alt={`${name}`}/> :
                            <img src={avatarPlaceholder} alt={`${name} does not have avatar`}/>
                    }
                </div>
                <div className="page__workouts__sidebar__item__content">
                    {
                        type === 'l' && <IoIosVideocam />
                    }
                    <p className="m-0 ml-2 d-inline-block">{title}</p>
                    <p className="m-0 text-muted">{name}</p>
                    {/* <p>{workoutDate}</p> */}
                </div>
            </div>
        </Link>
    )
}

WorkoutsSidebarItem.propTypes = {
    avatarUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default WorkoutsSidebarItem