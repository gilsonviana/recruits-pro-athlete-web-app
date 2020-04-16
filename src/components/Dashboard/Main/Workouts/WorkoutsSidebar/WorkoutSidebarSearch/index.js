import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

const WorkoutSidebarSearch = ({
    handleSearch
}) => {
    return (
        <Form>
            <Form.Control placeholder="Search workout" onChange={handleSearch}/>
        </Form>
    )
}

WorkoutSidebarSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default WorkoutSidebarSearch