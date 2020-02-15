// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { MdFilterList } from 'react-icons/md'

// Components
import EvaluationSearchBarFilter from './EvaluationSearchBarFilter'

const EvaluationSearchBar = ({
    handleOnChange,
    handleFilter
}) => {
    const [showFilter, setShowFilter] = useState(false)

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div className="evaluation-search-bar mb-4">
            <Form>
                <Form.Row>
                    <Col xs={10} md={6}>
                        <Form.Control placeholder="Search by evaluator's name" onChange={handleOnChange}/>
                    </Col>
                    <Col xs={2} md={6}>
                        <Button onClick={toggleFilter} variant="outline-secondary"><MdFilterList /></Button>
                    </Col>
                </Form.Row>
            </Form>
            {(showFilter) && <EvaluationSearchBarFilter onSubmit={handleFilter}/>}
        </div>
    )
}

EvaluationSearchBar.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default EvaluationSearchBar