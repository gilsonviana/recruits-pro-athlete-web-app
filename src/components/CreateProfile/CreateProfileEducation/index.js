// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaArrowLeft } from 'react-icons/fa'

// Assets
import './style.css'

const CreateProfileEducation = ({ handleTabKey, handleSubmit }) => {
    return (
        <div className="create-profile__education py-4">
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="createProfileSkill">
                    <Form.Label className="font-weight-bold">Skill level</Form.Label>
                    <Form.Control as="select" name="createProfileSkill">
                        <option value="">Choose a skill level</option>
                        <option value="youth">Youth</option>
                        <option value="high_school">High School</option>
                        <option value="college">College</option>
                        <option value="pro">Pro</option>
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} xs={12} md={8} controlId="createProfileSchool">
                        <Form.Label className="font-weight-bold">School name</Form.Label>
                        <Form.Control type="text" placeholder="Cub Bear High School" name="createProfileSchool"/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={4} controlId="createProfileGraduated">
                        <Form.Label></Form.Label>
                        <Form.Check 
                            name="createProfileGraduated"
                            type="switch" 
                            id="createProfileGraduated"
                            label="Graduated?" 
                            className="mt-md-3"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs="12" md={6} controlId="createProfileGraduationYear">
                        <Form.Label className="font-weight-bold">Graduation Year</Form.Label>
                        <Form.Control type="number" placeholder="2020" step="1.0" min="1980" max="2050" name="createProfileGraduationYear"/>
                        <Form.Text className="text-muted">
                            Type your zip code for auto completion.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} xs="12" md={6} controlId="createProfileGPA">
                        <Form.Label className="font-weight-bold">GPA</Form.Label>
                        <Form.Control type="text" name="createProfileGPA"/>
                    </Form.Group>
                </Form.Row>
                <Form.Group className="clearfix">
                    <Button className="create-profile__education__button-next float-left" onClick={() => handleTabKey('location')}>
                        <FaArrowLeft className="mr-2"/>Previous
                    </Button>
                    <Button type="submit" className="create-profile__education__button-next float-right">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

CreateProfileEducation.propTypes = {
    handleTabKey: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default CreateProfileEducation;
