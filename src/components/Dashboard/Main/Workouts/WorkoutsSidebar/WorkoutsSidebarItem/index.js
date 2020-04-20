import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { IoIosVideocam } from 'react-icons/io'
import './style.css'

import avatarPlaceholder from '../../../../../../assets/images/user.png'

const WorkoutsSidebarItem = ({
    avatarUrl,
    title,
    name,
    type,
    id
}) => {
    const renderItemContent = () => {
        if (type === 'l') {
            return (
                <div className="page__workouts__sidebar__item__content">
                    <IoIosVideocam />
                    <p className="m-0 ml-2 d-inline-block">{title}</p>
                    <p className="m-0 text-muted">{name}</p>
                </div>
            )
        }
        return (
            <div className="page__workouts__sidebar__item__content">
                <p className="m-0 d-inline-block">{title}</p>
                <p className="m-0 text-muted">{name}</p>
            </div>
        )
    }

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
                { renderItemContent() }
            </div>
        </Link>
    )
}

WorkoutsSidebarItem.propTypes = {
    avatarUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default WorkoutsSidebarItem