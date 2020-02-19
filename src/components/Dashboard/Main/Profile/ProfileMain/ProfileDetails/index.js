// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

// Redux
import { setProfileRequest } from '../../../../../../store/profile/actions'

// Assets
import './style.css'

const ProfileDetails = ({ setProfileRequest, token, profile }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isForeigner, setIsForeigner] = useState(false)
    const [formState, setFormState] = useState({
        personal: {
            heading: '',
            dob: new Date(),
            height: {
                feet: '',
                inches: ''
            },
            weight: '',
        },
        education: {
            skillLevel: '',
            schoolName: '',
            gpa: '',
            graduationYear: '',
            graduated: false,
        },
        location: {
            country: '',
            zipcode: '',
            city: '',
            state: ''
        }
    })

    useEffect(() => {
        const setFormFieldValues = () => {
            const dob = profile.personal.dob ? new Date(profile.personal.dob) : new Date()

            setFormState({
                ...formState,
                personal: {
                    ...formState.personal,
                    ...profile.personal,
                    dob
                },
                education: {
                    ...formState.education,
                    ...profile.education
                },
                location: {
                    ...formState.location,
                    ...profile.location,
                }
            })
        }
        setFormFieldValues()
    }, [profile])

    const handleFieldChange = (key, e) => {
        const { target } = e

        if (key === 'personal.height') {
            return setFormState({
                ...formState,
                personal: {
                    ...formState.personal,
                    height: {
                        ...formState.personal.height,
                        [target.name]: target.value
                    }
                }
            })
        }

        setFormState({
            ...formState,
            [key]: {
                ...formState[key],
                [target.name]: (target.type === 'checkbox') ? target.checked : target.value
            }
        })
    }

    const handleDateChange = (date = new Date()) => {
        setFormState({
            ...formState,
            personal: {
                ...formState.personal,
                dob: date
            }
        })
    }

    const handleForeignerField = () => {
        if (!isForeigner) {
            setIsForeigner(!isForeigner)
            setFormState({
                ...formState,
                location: {
                    ...formState.location,
                    zipcode: '',
                    city: '',
                    state: ''
                }
            })
            return
        }

        setIsForeigner(!isForeigner)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const res = await setProfileRequest(token, formState, false)

        if (!res) {
            alert()
            setIsLoading(true)
            return
        }

        setIsLoading(false)
    }

    return (
        <Card className="shadow-sm p-4">
            <Form noValidate onSubmit={handleFormSubmit}>
                <h5>Personal</h5>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label htmlFor="heading">Heading</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.personal.heading} type="text" name="heading" maxLength={120} onChange={(e) => handleFieldChange('personal', e)}/>
                        <Form.Text className="text-muted float-left">Positive message here.</Form.Text>
                        <Form.Text className="float-right">120 max characters.</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Profile picture</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control type="file"/>
                        <Form.Text className="text-muted mb-2">Upload a new profile picture, ideal size should be 300x300</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Cover image</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control type="file"/>
                        <Form.Text className="text-muted mb-2">Upload a new cover image, JPG 1200x300</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label htmlFor="dob">DOB</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <div className="form-datepicker-wrapper">
                            <Datepicker
                                selected={formState.personal.dob}
                                name="dob"
                                showPopperArrow={false}
                                onChange={(date) => handleDateChange(date)}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </div>
                        <Form.Text className="text-muted">Date of birth</Form.Text>
                    </Col>
                </Form.Row>
                <h5>Height</h5>
                <Form.Row>
                    <Col sm={3} md={3}>
                        <Form.Label htmlFor="feet">Feet</Form.Label>
                    </Col>
                    <Col sm={3} md={2} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.personal.height.feet} min="1" max="12" maxLength="2" type="number" name="feet" step="1.0" onChange={(e) => handleFieldChange('personal.height', e)}/>
                    </Col>
                    <Col sm={3} md={{span: 2, offset: 3}}>
                        <Form.Label htmlFor="inches">Inches</Form.Label>
                    </Col>
                    <Col sm={3} md={2} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.personal.height.inches} min="1" max="12" maxLength="2" type="number" name="inches" step="1.0" onChange={(e) => handleFieldChange('personal.height', e)}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label htmlFor="weight">Weight</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.personal.weight} min="1" max="500" maxLength="3" type="number" name="weight" step="1.0" onChange={(e) => handleFieldChange('personal', e)}/>
                    </Col>
                </Form.Row>
                <hr />
                <h5 className="mb-3">Education</h5>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label htmlFor="skillLevel">Skill level</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.education.skillLevel} as="select" name="skillLevel" onChange={(e) => handleFieldChange('education', e)}>
                            <option>Choose skill level</option>
                            <option value="youth">Youth</option>
                            <option value="high-school">High School</option>
                            <option value="college">College</option>
                            <option value="pro">Pro</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>School name</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.education.schoolName} type="text" name="schoolName" onChange={e => handleFieldChange("education", e)}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Graduation year</Form.Label>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Control autoComplete="off" value={formState.education.graduationYear} maxLength="4" type="number" step="1.0" min="1980" max="2050" name="graduationYear" onChange={e => handleFieldChange("education", e)} />
                        <Form.Text className="text-muted">If not graduated, enter estimated graduation date.</Form.Text>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Form.Group className="d-flex align-items-center">
                            <Form.Label htmlFor="graduated">&nbsp;</Form.Label>
                            <Form.Check 
                                checked={formState.education.graduated}
                                name="graduated"
                                onChange={e => handleFieldChange("education", e)}
                                type="switch" 
                                id="createProfileGraduated"
                                label="Graduated?" 
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>GPA</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control autoComplete="off" name="gpa" type="number" maxLength="5" value={formState.education.gpa} onChange={e => handleFieldChange("education", e)}/>
                    </Col>
                </Form.Row>
                <hr />
                <h5 className="mb-3">Location</h5>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label htmlFor="country">Country</Form.Label>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Control value={formState.location.country} type="text" name="country" onChange={e => handleFieldChange("location", e)}/>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Form.Group className="d-flex align-items-center">
                            <Form.Label htmlFor="graduated">&nbsp;</Form.Label>
                            <Form.Check 
                                value={formState.education.graduated} 
                                onChange={handleForeignerField}
                                type="switch" 
                                id="createProfileForeigner"
                                label="Outside USA?" 
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>Zip code</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.location.zipcode} disabled={isForeigner} type="text" name="zipcode" onChange={e => handleFieldChange("location", e)}/>
                        <Form.Text className="text-muted">Use zip code to auto complete city and state fields.</Form.Text>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>City</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.location.city} disabled={isForeigner} type="text" name="city" onChange={e => handleFieldChange("location", e)}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Label>State</Form.Label>
                    </Col>
                    <Col md={9} className="mb-3">
                        <Form.Control value={formState.location.state} disabled={isForeigner} type="text" name="state" onChange={e => handleFieldChange("location", e)}/>
                    </Col>
                </Form.Row>
                <Button type="submit" variant="success" className="d-flex float-right">
                    Update profile
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

ProfileDetails.propTypes = {
    setProfileRequest: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    profile: state.profile
})

export default connect(mapStateToProps, { setProfileRequest })(ProfileDetails)