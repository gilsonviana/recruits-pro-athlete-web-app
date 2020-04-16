import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import WorkoutsSidebarItem from './WorkoutsSidebarItem'
import WorkoutSidebarSearch from './WorkoutSidebarSearch'

const WorkoutsSidebar = ({
    workouts
}) => {
    const [workoutsState, setWorkoutsState] = useState([])

    useEffect(() => {
        setWorkoutsState(workouts)
    }, [workouts])

    const handleOnSearch = (e) => {
        e.preventDefault()
        console.log('handleOnSearch', e.target.value)
    }

    return (
        <div className="page__workouts__sidebar">
            <WorkoutSidebarSearch handleSearch={handleOnSearch} />
            {/* Loop through workouts and render workouts sidebar item */}
            {
                workoutsState.map(({ evaluatorId, name, createdAt, type, _id }, i) => <WorkoutsSidebarItem key={i} avatarUrl={evaluatorId.personal.avatarUrl} name={evaluatorId.personal.fullName} title={name} date={createdAt} type={type} id={_id}/>)
            }
        </div>
    )
}

WorkoutsSidebar.propTypes = {
    workouts: PropTypes.array.isRequired
}

export default WorkoutsSidebar