// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Datepicker from 'react-datepicker'
import { FaRegCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";

const EvaluationSearchBarFilter = ({ onSubmit }) => {
    const [filter, setFilter] = useState({
        dateFrom: new Date(),
        dateTo: new Date(),
        sport: ''
    })

    const handleDateChange = (name = "", date = new Date()) => {
        setFilter({
            ...filter,
            [name]: date
        })
    }

    const handleOnChange = (e) => {
        const { target } = e
        setFilter({
            ...filter,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(filter)
    }

    return (
        <div className="evaluation-search-bar-filter border my-2 rounded rounded-sm py-3 px-2">
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col lg={4} xl={3}>
                        <Form.Group controlId="evaluationSearchBarFilterByDateFrom">
                            <Form.Label className="font-weight-bold">From</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend"><FaRegCalendarAlt /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Datepicker 
                                    isClearable
                                    showPopperArrow={false}
                                    selected={filter.dateFrom}
                                    onChange={(date) => handleDateChange('dateFrom', date)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xl={3}>
                        <Form.Group controlId="evaluationSearchBarFilterByDateTo">
                            <Form.Label className="font-weight-bold">To</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend"><FaRegCalendarAlt /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Datepicker 
                                    isClearable
                                    showPopperArrow={false}
                                    selected={filter.dateTo}
                                    onChange={(date) => handleDateChange('dateTo', date)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xl={4}>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Sport category</Form.Label>
                            <Form.Control as="select" name="sport" onChange={handleOnChange}>
                                <option>Choose a sport</option>
                                <option value="baseball">Baseball</option>
                                <option value="basketball">Basketball</option>
                                <option value="football">Football</option>
                                <option value="soccer">Soccer</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xl={2}>
                        <Form.Group>
                            <Form.Label>&nbsp;</Form.Label>
                            <Button variant="success" className="d-block" type="submit">Submit</Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

EvaluationSearchBarFilter.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default EvaluationSearchBarFilter