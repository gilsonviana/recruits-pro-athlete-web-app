// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Assets
import './style.css'

const CreateProfileEducation = ({ handleTabKey, handleOnChange }) => {
    const [errorMessage, setErrorMessage] = useState({
        gpa: {
            invalid: false
        },
        skillLevel: {
            required: false
        }
    })
    
    const handleValidation = (e) => {
        const { target } = e
        const regGpa = /^[0]|[0-3]\.(\d?\d?)|[4].[0]$/

        if (target.name === 'gpa') {
            if (!regGpa.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        invalid: 'Please insert a valid GPA.'
                    }
                })
                handleOnChange(e)
                return
            }
    
            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    invalid: false
                }
            })
            handleOnChange(e)
            return
        }

        if (target.name === 'skillLevel') {
            if (target.value === '') {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: true
                    }
                })
                handleOnChange(e)
                return
            }

            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: false
                }
            })
            handleOnChange(e)
            return
        }
    }

    return (
        <div className="create-profile__education py-4">
            <Form noValidate autoComplete="off">
                <Form.Group controlId="createProfileSkill">
                    <Form.Label className="font-weight-bold">Skill level</Form.Label>
                    <Form.Control as="select" name="skillLevel" onChange={handleValidation}>
                        <option value="">Choose a skill level</option>
                        <option value="youth">Youth</option>
                        <option value="high_school">High School</option>
                        <option value="college">College</option>
                        <option value="pro">Pro</option>
                    </Form.Control>
                    <Form.Text className={errorMessage.skillLevel.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                </Form.Group>
                <Form.Row className="mx-0">
                    <Form.Group as={Col} xs={12} md={8} controlId="createProfileSchool">
                        <Form.Label className="font-weight-bold">School name</Form.Label>
                        <Form.Control maxLength="60" type="text" placeholder="" name="schoolName" onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={4} controlId="createProfileGraduated">
                        <Form.Label></Form.Label>
                        <Form.Check 
                            name="graduated"
                            onChange={handleOnChange}
                            type="switch" 
                            id="createProfileGraduated"
                            label="Graduated?" 
                            className="mt-md-3"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mx-0">
                    <Form.Group as={Col} xs="12" md={6} controlId="createProfileGraduationYear">
                        <Form.Label className="font-weight-bold">Graduation Year</Form.Label>
                        <Form.Control maxLength="4" type="number" placeholder="" step="1.0" min="1980" max="2050" name="graduationYear" onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group as={Col} xs="12" md={6} controlId="createProfileGPA">
                        <Form.Label className="font-weight-bold">GPA</Form.Label>
                        <Form.Control type="text" name="gpa" onChange={handleValidation} />
                        <Form.Text className="text-danger">{errorMessage.gpa.invalid}</Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Group className="clearfix">
                    <Button
                        className="create-profile__location__button-next float-left text-dark border-0"
                        onClick={() => handleTabKey("location")} style={{backgroundColor: '#00EC00'}}>
                        <FaArrowLeft className="mr-2" /> Previous
                    </Button>
                    <Button
                        className="create-profile__location__button-next float-right mt-3 mt-md-0 text-dark border-0"
                        onClick={() => handleTabKey("sports")} style={{backgroundColor: '#00EC00'}}>
                        Next<FaArrowRight className="ml-2" />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

CreateProfileEducation.propTypes = {
    handleTabKey: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export default CreateProfileEducation;
