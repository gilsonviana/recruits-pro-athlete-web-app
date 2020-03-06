// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'
import Toast from 'react-bootstrap/Toast'

// Assets
import { setProfileRequest } from '../../../../../../store/profile/actions'

const ProfileAccount = ({ setProfileRequest, token, profile }) => {
    const [showToast, setShowToast] = useState({
        isVisible: false,
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState({
        personal: {
            fullName: '',
            phone: {
                number: '',
                mobile: false
            },
            email: ''
        }
    })
    const [errorMessage, setErrorMessage] = useState({
        fullName: {
            required: '',
            invalid: ''
        },
        phone: {
            invalid: ''
        },  
        email: {
            required: '',
            invalid: ''
        }
    })

    useEffect(() => {
        const setFormFieldValues = () => {
            setFormState({
                personal: {
                    ...profile.personal,
                    fullName: profile.personal.fullName,
                    phone: {
                        number: profile.personal.phone.number,
                        mobile: profile.personal.phone.mobile
                    },
                    email: profile.personal.email
                }
            })
        }
        setFormFieldValues()
    }, [profile])

    const validateField = (e) => {
        const regOnlyNumbers = /^\d+$/
        const regOnlyLetters = /^[a-zA-Z\s]*$/
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const { target } = e

        if (target.name === 'fullName') {
            if (!regOnlyLetters.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please, insert only valid characters'
                    }
                })
                return
            }

            if (target.value.trim() === "") {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        required: 'Required'
                    }
                })
                return
            }

            setErrorMessage({
                ...errorMessage,
                fullName: {
                    required: '',
                    invalid: ''
                }
            })

        }

        if (target.name === 'number') {
            if (!regOnlyNumbers.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    phone: {
                        invalid: 'Please, insert only valid characters'
                    }
                })
                return
            }

            setErrorMessage({
                ...errorMessage,
                phone: {
                    invalid: ''
                }
            })
        }

        if (target.name === 'email') {
            if (!regEmail.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Invalid email. Please insert a valid email address'
                    }
                })
                return
            }

            if (target.value === "") {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        required: 'Required'
                    }
                })
                return
            }

            setErrorMessage({
                ...errorMessage,
                email: {
                    required: '',
                    invalid: ''
                }
            })
        }
    }

    const handleFieldChange = (e, key = "") => {
        const { target } = e

        if (key === 'phone') {
            setFormState({
                personal: {
                    ...formState.personal,
                    phone: {
                        ...formState.personal.phone,
                        [target.name]: (target.type === 'checkbox') ? target.checked : target.value
                    }
                },
            })
            validateField(e)
            return
        }

        setFormState({
            personal: {
                ...formState.personal,
                [target.name]: target.value
            }
        })
        validateField(e)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        
        if (_formValidation(formState)) {
            try {
                setIsLoading(true)
                
                await setProfileRequest(token, formState, false)

                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                setShowToast({
                    isVisible: true,
                    message: "Sorry, we are unable to update profile at this moment."
                })
            }
        }

    }

    const _formValidation = (form) => {
        const requiredFields = {
            personal: [{
                name: 'fullName',
                label: 'Full name'
            }, {
                name: 'email',
                label: 'Email address'
            }]
        }
        const errorFields = []
        const ruleKeys = Object.keys(requiredFields)
        const formKeys = Object.keys(form)

        if (formKeys.length > 0) {
            ruleKeys.forEach(rule => {
                if (form.hasOwnProperty(rule)) {
                    requiredFields[rule].map(({ name: key, label }) => {
                        if (!form[rule][key]) {
                            errorFields.push(label)
                            return
                        }
                    })
                }
            })
        }

        if (errorFields.length > 0) {
            setShowToast({
                isVisible: true,
                message: errorFields.length > 1 ? `
                    The following fields are required: ${errorFields.join(', ')}.
                `: `
                    The following field is required: ${errorFields.join(', ')}.
                `
            })
            return false
        }

        return true
    }

    return (
        <Card className="shadow-sm p-4">
            <div className="fixed-top"> 
                <Toast onClose={() => setShowToast({isVisible: false, message: ''})} show={showToast.isVisible} delay={4000} autohide style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#eb5a46`,
                    color: `#eee`,
                    width: `100%`
                }}>
                    <Toast.Body>{showToast.message}</Toast.Body>
                </Toast>
            </div>
            <Form noValidate onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Full name</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.personal.fullName} name="fullName" type="text" onChange={e => handleFieldChange(e, '')}/>
                        <Form.Text className="text-danger font-weight-bold">{errorMessage.fullName.required}</Form.Text>
                        <Form.Text className="text-danger font-weight-bold">{errorMessage.fullName.invalid}</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Phone number</Form.Label>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Control value={formState.personal.phone.number} name="number" type="tel" onChange={e => handleFieldChange(e, "phone")}/>
                        <Form.Text className="text-danger font-weight-bold">{errorMessage.phone.invalid}</Form.Text>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Form.Group className="d-flex align-items-center">
                            <Form.Label htmlFor="graduated">&nbsp;</Form.Label>
                            <Form.Check 
                                checked={formState.personal.phone.mobile}
                                name="mobile"
                                onChange={e => handleFieldChange(e, "phone")}
                                type="switch" 
                                id="editProfileAccountMobile"
                                label="Mobile?" 
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Email</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.personal.email} name="email" type="text" onChange={handleFieldChange}/>
                        <Form.Text className="text-muted">Use this field if your contact email is different than your login email.</Form.Text>
                        <Form.Text className="text-danger font-weight-bold">{errorMessage.email.required}</Form.Text>
                        <Form.Text className="text-danger font-weight-bold">{errorMessage.email.invalid}</Form.Text>
                    </Col>
                </Form.Row>
                <hr />
                <Button type="submit" variant="success" className="d-flex float-right mt-2 mt-lg-0">
                    Update account 
                    {isLoading && <Loader
                                        className="pl-2"
                                        type="Oval"
                                        color="#00FF00"
                                        width={25}
                                        height={25}
                                    />}
                </Button>
            </Form>
        </Card>
    )
}

ProfileAccount.propTypes = {
    setProfileRequest: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    profile: state.profile
})

export default connect(mapStateToProps, { setProfileRequest })(ProfileAccount)