import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { MdFilterList } from 'react-icons/md'

import WorkoutDetailsMetricsFilterCategories from './WorkoutDetailsMetricsFilterCategories'

const WorkoutDetailsMetricsFilter = ({
    categories,
    handleSearch,
    handleFilter
}) => {
    const [showFilter, setShowFilter] = useState(false)

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div className="page__workouts__details__metrics__filter mb-4">
            <Form>
                <Form.Row>
                    <Col xs={10} md={6}>
                        <Form.Control placeholder="Search metric" onChange={handleSearch} />
                    </Col>
                    <Col xs={2} md={6}>
                        <Button onClick={toggleFilter} variant="outline-secondary"><MdFilterList /> Categories</Button>
                    </Col>
                </Form.Row>
            </Form>
            {(showFilter) && <WorkoutDetailsMetricsFilterCategories categories={categories} handleFilter={handleFilter} />}
        </div>
    )
}

WorkoutDetailsMetricsFilter.propTypes = {
    categories: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default WorkoutDetailsMetricsFilter