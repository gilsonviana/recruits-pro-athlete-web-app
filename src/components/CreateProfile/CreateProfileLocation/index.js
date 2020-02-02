// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

// Assets
import './style.css'

const CreateProfileLocation = ({ handleTabKey }) => {
    const [isForeigner, setIsForeigner] = useState(false)

    return (
        <div className="create-profile__location py-4">
            <Form noValidate>
                <Form.Row>
                    <Form.Group as={Col} xs={12} md={8} controlId="createProfileCountry">
                        <Form.Label className="font-weight-bold">Country</Form.Label>
                        <Form.Control type="text" placeholder="USA" name="createProfileCountry" disabled/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={4} controlId="createProfileForeigner">
                        <Form.Label></Form.Label>
                        <Form.Check 
                            onChange={() => setIsForeigner(!isForeigner)}
                            name="createProfileForeigner"
                            type="switch" 
                            id="createProfileForeigner"
                            label="Outside USA?" 
                            className="mt-md-3"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={4} controlId="createProfileZipcode" className="mb-0">
                        <Form.Label className="font-weight-bold">Zip code</Form.Label>
                        <Form.Control type="text" placeholder="32839" name="createProfileZipcode" disabled={isForeigner}/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12}>
                        <Form.Text className="text-muted">
                            Type your zip code for auto completion.
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={12} md="6" controlId="createProfileCity">
                        <Form.Label className="font-weight-bold">City</Form.Label>
                        <Form.Control type="text" placeholder="Orlando" name="createProfileCity" disabled={isForeigner}/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md="6" controlId="createProfileState">
                        <Form.Label className="font-weight-bold">State</Form.Label>
                        <Form.Control type="text" placeholder="Florida" name="createProfileState" disabled={isForeigner}/>
                    </Form.Group>
                </Form.Row>
                <Form.Group className="clearfix">
                    <Button className="create-profile__location__button-next float-left" onClick={() => handleTabKey('personal')}>
                    <FaArrowLeft className="mr-2"/>Previous 
                    </Button>
                    <Button className="create-profile__location__button-next float-right" onClick={() => handleTabKey('education')}>
                        Next<FaArrowRight className="ml-2"/>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

CreateProfileLocation.propTypes = {
    handleTabKey: PropTypes.func.isRequired
}

export default CreateProfileLocation;
