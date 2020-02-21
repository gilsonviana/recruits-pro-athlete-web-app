// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'

// Assets
import { setProfileRequest } from '../../../../../../store/profile/actions'

const ProfileAccount = ({ setProfileRequest, token, profile }) => {
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

            return
        }

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const res = await setProfileRequest(token, formState, false)

        if (!res) {
            setIsLoading(true)
            return
        }

        setIsLoading(false)
    }

    return (
        <Card className="shadow-sm p-4">
            <Form noValidate onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Full name</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.personal.fullName} name="fullName" type="text" onChange={handleFieldChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Phone number</Form.Label>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Control value={formState.personal.phone.number} name="number" type="tel" onChange={e => handleFieldChange(e, "phone")}/>
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
                    </Col>
                </Form.Row>
                {/* <Form.Row>
                    <Col md={3}>
                        <Form.Label>New password</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control autoComplete="off" type="password"/>
                        <Form.Text className="text-muted">Password should be at least 6 characters long.</Form.Text>
                    </Col>
                </Form.Row> */}
                <hr />
                <Form.Row>
                    {/* <Col lg={3}>
                        <Form.Label className="font-weight-bold">Current password</Form.Label>
                    </Col>
                    <Col lg={6}>
                        <Form.Control autoComplete="off" type="password"/>
                    </Col> */}
                    <Col lg={{span: 3, offset: 9}} className="mb-3">
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
                    </Col>
                </Form.Row>
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