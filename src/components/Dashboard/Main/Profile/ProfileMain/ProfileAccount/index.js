// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProfileAccount = () => {
    return (
        <Card className="shadow-sm p-4">
            <Form>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Full name</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control type="text"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Phone number</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control type="phone"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Email</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">Use this field if your contact email is different than your login email.</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>New password</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control type="password"/>
                        <Form.Text className="text-muted">Password should be at least 6 characters long.</Form.Text>
                    </Col>
                </Form.Row>
                <hr />
                <Form.Row>
                    <Col lg={3}>
                        <Form.Label className="font-weight-bold">Current password</Form.Label>
                    </Col>
                    <Col lg={6}>
                        <Form.Control type="password" placeholder=""/>
                    </Col>
                    <Col lg={3} className="mb-3">
                        <Button type="submit" variant="success" className="float-right mt-2 mt-lg-0">Update account</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Card>
    )
}

export default ProfileAccount