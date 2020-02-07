// Dependencies
import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";

// Assets
import "./style.css";

const CreateProfilePersonal = ({ handleTabKey, handleOnChange }) => {
    return (
        <div className="create-profile__personal py-4">
            <Form noValidate>
                <Form.Group controlId="createProfilePicture">
                    <Form.Label className="font-weight-bold">Profile picture</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="avatarUrl"
                        multiple={false}
                        accept=".png,.jpg,.jpeg"
                        onChange={handleOnChange}/>
                </Form.Group>
                <Form.Group controlId="createProfileDob">
                    <Form.Label className="font-weight-bold">Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder=""
                        name="dob"
                        onChange={handleOnChange}
                    />
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
                            pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}"
                            name="number"
                            onChange={handleOnChange}
                        />
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
                            onChange={handleOnChange}
                            maxLength="2"
                        />
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
                            onChange={handleOnChange} 
                            maxLength="2"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="createProfileWeight">
                    <Form.Label className="font-weight-bold">Weight</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="180" 
                        name="weight"
                        onChange={handleOnChange} 
                        maxLength="3"
                    />
                </Form.Group>
                <Form.Group className="clearfix">
                    <Button
                        className="create-profile__personal__button-next float-right"
                        onClick={() => handleTabKey("location")}
                    >
                        Next
            <FaArrowRight className="ml-2" />
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
