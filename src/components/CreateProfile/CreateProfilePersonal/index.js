// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import Datepicker from 'react-datepicker'

// Assets
import "./style.css";

const CreateProfilePersonal = ({ handleTabKey, handleOnChange }) => {
    const [dob, setDob] = useState(new Date())
    const [errorMessage, setErrorMessage] = useState({
        number: '',
        feet: '',
        inches: '',
        weight: ''
    })

    const handleValidation = (e) => {
        const { target } = e
        const regOnlyNumbers = /^\d+$/

        if (!regOnlyNumbers.test(target.value)) {
            setErrorMessage({
                ...errorMessage,
                [target.name]: 'Please insert a valid character.'
            })
            return
        }
        setErrorMessage({
            ...errorMessage,
            [target.name]: ''
        })
        handleOnChange(e)
    }

    const handleDateChange = (date = new Date()) => {
        setDob(date)
        handleOnChange({ target: { name: 'dob', value: date } })
    }
    return (
        <div className="create-profile__personal py-4">
            <Form noValidate>
                <Form.Group controlId="createProfilePicture">
                    <Form.Label className="font-weight-bold">Profile picture</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="avatar"
                        multiple={false}
                        accept=".png,.jpg,.jpeg"
                        onChange={handleOnChange}/>
                </Form.Group>
                <Form.Group controlId="createProfilePicture">
                    <Form.Label className="font-weight-bold">Cover image</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="cover"
                        multiple={false}
                        accept=".png,.jpg,.jpeg"
                        onChange={handleOnChange}/>
                </Form.Group>
                <Form.Group controlId="createProfileDob">
                    <Form.Label className="font-weight-bold">Date of Birth</Form.Label>
                    <div className="form-datepicker-wrapper">
                        <Datepicker
                            selected={dob}
                            name="dob"
                            showPopperArrow={false}
                            onChange={(date) => handleDateChange(date)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            />
                    </div>
                </Form.Group>
                <Form.Label
                    htmlFor="createProfileContactPhone"
                    className="font-weight-bold"
                >
                    Contact
                </Form.Label>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="8"
                        controlId="createProfileContactPhone"
                    >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="(012)345-6789"
                            maxLength="20"
                            name="number"
                            onChange={handleValidation}
                        />
                        <Form.Text className="text-danger">{errorMessage.number}</Form.Text>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="4"
                        controlId="createProfileContactMobile"
                    >
                        <Form.Label></Form.Label>
                        <Form.Check
                            type="switch"
                            id="createProfilePhoneMobile"
                            label="Mobile?"
                            className="mt-md-3"
                            name="mobile"
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Label
                    htmlFor="createProfileHeightFeet"
                    className="font-weight-bold"
                >
                    Height
                </Form.Label>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightFeet"
                    >
                        <Form.Label>Feet</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="5" 
                            name="feet"
                            onChange={handleValidation}
                            maxLength="2"
                        />
                        <Form.Text className="text-danger">{errorMessage.feet}</Form.Text>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightInches"
                    >
                        <Form.Label>Inches</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="8" 
                            name="inches"
                            onChange={handleValidation} 
                            maxLength="2"
                        />
                        <Form.Text className="text-danger">{errorMessage.inches}</Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="createProfileWeight">
                    <Form.Label className="font-weight-bold">Weight</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="180" 
                        name="weight"
                        onChange={handleValidation} 
                        maxLength="3"
                    />
                    <Form.Text className="text-danger">{errorMessage.weight}</Form.Text>
                </Form.Group>
                <Form.Label
                    htmlFor="createProfileHeightFeet"
                    className="font-weight-bold"
                >
                    References
                </Form.Label>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightFeet">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="first"
                            onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightInches">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="first"
                            onChange={handleOnChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightFeet">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="second"
                            onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightInches">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="second"
                            onChange={handleOnChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightFeet">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="third"
                            onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        controlId="createProfileHeightInches">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="third"
                            onChange={handleOnChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Group className="clearfix">
                    <Button className="create-profile__personal__button-next float-right" onClick={() => handleTabKey("location")}>
                        Next <FaArrowRight className="ml-2" />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

CreateProfilePersonal.propTypes = {
    handleTabKey: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default CreateProfilePersonal;
