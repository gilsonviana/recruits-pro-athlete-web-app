// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const ProfileSocial = () => {
    return (
        <Card className="shadow-sm p-4">
            <Form>
                <h5>Social networks</h5>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                            <FaFacebookF color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control type="text" size="sm"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                            <FaInstagram color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control type="text" size="sm"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                            <FaTwitter color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control type="text" size="sm"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                            <FaLinkedinIn color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control type="text" size="sm"/>
                    </Col>
                </Form.Row>
                
                <Button type="submit" variant="success" className="float-right">Update social</Button>
            </Form>
        </Card>
    )
}

export default ProfileSocial