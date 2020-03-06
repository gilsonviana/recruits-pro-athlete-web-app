// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Assets
import "./style.css";

const CreateProfileLocation = ({ handleTabKey, handleOnChange }) => {
    const [isForeigner, setIsForeigner] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        country: {
            required: false,
            invalid: false
        },
        zipcode: {
            invalid: false
        },
        city: {
            invalid: false
        },
        state: {
            invalid: false
        }
    })

    const handleIsForeigner = () => {
        if (isForeigner) {
            setIsForeigner(!isForeigner)
            handleOnChange({ target: {name: "country", value: "USA"} })
            return
        }
        setIsForeigner(!isForeigner)
    }

    const handleValidation = (e) => {
        const { target } = e
        const regOnlyLetters = /^[a-zA-Z\s]*$/
        const regOnlyNumbers = /^\d+$/
        const regZipcode = /^\d{5}$/
        
        if (target.name === 'country') {
            if (target.value === '') {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        required: true
                    }
                })
                handleOnChange(e)
                return
            }

            if (!regOnlyLetters.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid character.'
                    }
                })
                handleOnChange(e)
                return
            }

            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: false,
                    invalid: false
                }
            })
            handleOnChange(e)
            return
        }

        if (target.name === 'zipcode') {
            if (!regOnlyNumbers.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid character.'
                    }
                })
                handleOnChange(e)
                return
            }

            if (!regZipcode.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid zipcode.'
                    }
                })
                handleOnChange(e)
                return
            }

            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: false,
                    invalid: false
                }
            })
            handleOnChange(e)
            return
        }
        
        if (!regOnlyLetters.test(target.value)) {
            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    ...errorMessage[target.name],
                    invalid: 'Please insert a valid character.'
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
    }

    return (
        <div className="create-profile__location py-4">
            <Form noValidate autoComplete="off">
                <Form.Row className="mx-0">
                    <Form.Group as={Col} xs={12} md={8} controlId="createProfileCountry">
                        <Form.Label className="font-weight-bold">Country</Form.Label>
                        <Form.Control
                            onChange={handleValidation}
                            type="text"
                            placeholder="USA"
                            name="country"
                            disabled={!isForeigner}
                            maxLength="60"
                        />
                        <Form.Text className={errorMessage.country.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                        <Form.Text className="text-danger">{errorMessage.country.invalid}</Form.Text>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        xs={12}
                        md={4}
                        controlId="createProfileForeigner">
                        <Form.Label></Form.Label>
                        <Form.Check
                            onChange={handleIsForeigner}
                            name="country-foreigner"
                            type="switch"
                            id="createProfileForeigner"
                            label="Outside USA?"
                            className="mt-md-3"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mx-0">
                    <Form.Group
                        as={Col}
                        xs={12}
                        md={6}
                        lg={4}
                        controlId="createProfileZipcode"
                        className="mb-0">
                        <Form.Label className="font-weight-bold">Zip code</Form.Label>
                        <Form.Control
                            onChange={handleValidation}
                            type="text"
                            placeholder=""
                            name="zipcode"
                            disabled={isForeigner}
                            maxLength="6"
                        />
                        <Form.Text className="text-danger">{errorMessage.zipcode.invalid}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} xs={12}>
                        <Form.Text className="text-muted">
                            Type your zip code for auto completion.
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mx-0">
                    <Form.Group as={Col} xs={12} md="6" controlId="createProfileCity">
                        <Form.Label className="font-weight-bold">City</Form.Label>
                        <Form.Control
                            onChange={handleValidation}
                            type="text"
                            placeholder=""
                            name="city"
                            disabled={isForeigner}
                            maxLength="60"
                        />
                        <Form.Text className="text-danger">{errorMessage.city.invalid}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md="6" controlId="createProfileState">
                        <Form.Label className="font-weight-bold">State</Form.Label>
                        <Form.Control
                            onChange={handleValidation}
                            type="text"
                            placeholder=""
                            name="state"
                            disabled={isForeigner}
                            maxLength="60"
                        />
                        <Form.Text className="text-danger">{errorMessage.state.invalid}</Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Group className="clearfix">
                    <Button
                        className="create-profile__location__button-next float-left"
                        onClick={() => handleTabKey("personal")}>
                        <FaArrowLeft className="mr-2" /> Previous
                    </Button>
                    <Button
                        className="create-profile__location__button-next float-right mt-3 mt-md-0"
                        onClick={() => handleTabKey("education")}>
                        Next<FaArrowRight className="ml-2" />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

CreateProfileLocation.propTypes = {
    handleTabKey: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default CreateProfileLocation;
