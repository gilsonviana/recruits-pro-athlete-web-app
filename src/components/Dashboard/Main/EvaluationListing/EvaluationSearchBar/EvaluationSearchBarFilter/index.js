// Dependencies
import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaRegCalendarAlt } from 'react-icons/fa'

const EvaluationSearchBarFilter = () => {
    return (
        <div className="evaluation-search-bar-filter border my-2 rounded rounded-sm py-3 px-2">
            <Form>
                <Form.Row>
                    <Col lg={4} xl={3}>
                        <Form.Group controlId="evaluationSearchBarFilterByDateFrom">
                            <Form.Label className="font-weight-bold">From</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend"><FaRegCalendarAlt /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="date"
                                    name="from"
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
                                <Form.Control
                                    type="date"
                                    name="from"
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={4} xl={4}>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Sport category</Form.Label>
                            <Form.Control as="select">
                                <option>Choose a sport</option>
                                <option>Baseball</option>
                                <option>Basketball</option>
                                <option>Football</option>
                                <option>Soccer</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xl={2}>
                        <Form.Group>
                            <Form.Label>&nbsp;</Form.Label>
                            <Button variant="success" className="d-block">Submit</Button>
                            {/* <Form.Control type="submit" value="Filter" variant="success" /> */}
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default EvaluationSearchBarFilter