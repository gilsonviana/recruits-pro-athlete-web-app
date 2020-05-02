// Dependencies
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Loader from 'react-loader-spinner'
import Datepicker from 'react-datepicker'
import { FaCaretRight } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";

// Redux
import { setProfileRequest, setProfileImagesRequest } from '../../../../../../store/profile/actions'

// Assets
import './style.css'

const ProfileDetails = ({ setProfileRequest, setProfileImagesRequest, handlerPreviewImages, token, profile, history }) => {
    const [isSubscriber, setIsSubscriber] = useState(false)
    const [showToast, setShowToast] = useState({
        isVisible: false,
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isForeigner, setIsForeigner] = useState(false)
    const [previewImages, setPreviewImages] = useState({
        avatar: '',
        cover: ''
    })
    const [formState, setFormState] = useState({
        personal: {
            heading: '',
            dob: new Date(),
            avatarUrl: '',
            coverImgUrl: '',
            height: {
                feet: '',
                inches: ''
            },
            weight: '',
            references: {
                first: {
                    name: '',
                    email: ''
                },
                second: {
                    name: '',
                    email: ''
                },
                third: {
                    name: '',
                    email: ''
                }
            }
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
    const [errorMessage, setErrorMessage] = useState({
        avatar: {
            invalid: ''
        },
        dob: {
            required: '',
        },
        skillLevel: {
            required: ''
        },  
        country: {
            required: '',
            invalid: ''
        },
        zipcode: {
            invalid: ''
        },
        city: {
            invalid: ''
        },
        state: {
            invalid: ''
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
        const verifySubscriber = () => {
            const subscriber = profile.subscription.status === 'ACTIVE'
            setIsSubscriber(subscriber)
        }
        setFormFieldValues()
        verifySubscriber()
    }, [profile])

    const handleFieldChange = (key, e) => {
        const { target } = e
        validateField(e)

        if (target.name === 'avatar' || target.name === 'cover') {
            handlerPreviewImages(e)
            return setPreviewImages({
                ...previewImages,
                [target.name]: target.files[0]
            })
        }

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

        if (target.name === 'first' || target.name === 'second' || target.name === 'third') {
            switch(target.type) {
                case 'text':
                    setFormState({
                        ...formState,
                        personal: {
                            ...formState.personal,
                            [key]: {
                                ...formState.personal[key],
                                [target.name]: {
                                    ...formState.personal[key][target.name],
                                    name: target.value
                                }
                            }
                        }
                    })
                    return
                case 'email':
                    setFormState({
                        ...formState,
                        personal: {
                            ...formState.personal,
                            [key]: {
                                ...formState.personal[key],
                                [target.name]: {
                                    ...formState.personal[key][target.name],
                                    email: target.value
                                }
                            }
                        }
                    })
                    return
                default:
                    return
            }
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
        validateField({target: {name: 'dob', value: date}})
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

    const validateField = (e) => {
        const regZipcode = /^\d{5}$/
        const regOnlyLetters = /^[a-zA-Z\s]*$/

        const { target } = e

        if (target.name === 'avatar') {
            if (target.files[0].size > 2054305) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        invalid: 'Avatar size limit is 2 mb.'
                    }
                })
                return
            }
            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    invalid: ''
                }
            })
            return
        }

        if (target.name === 'dob' || target.name === 'skillLevel') {
            if (!target.value) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: 'Required'
                    }
                })
                return
            }
            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: ''
                }
            })
        }

        if (target.name === 'country') {
            if (!target.value) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: 'Required'
                    }
                })
                return  
            }
            if (!regOnlyLetters.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid character'
                    }
                })
                return
            }
            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: ''
                }
            })
        }

        if (target.name === 'city' || target.name === 'state') {
            if (!regOnlyLetters.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid character'
                    }
                })
            }
        }

        if (target.name === 'zipcode') {
            if (!regZipcode.test(target.value)) {
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        ...errorMessage[target.name],
                        invalid: 'Please insert a valid zipcode.'
                    }
                })
                return
            }

            setErrorMessage({
                ...errorMessage,
                [target.name]: {
                    required: false,
                    invalid: false
                }
            })
            return
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (_formValidation(formState)) {
            try {
                setIsLoading(true)
                
                await setProfileRequest(token, formState, false)
                await setProfileImagesRequest(token, previewImages)
                
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

    const handleSubscribeNow = () => {
        history.push('/dashboard/profile/subscribe')
    }

    const _formValidation = (form) => {
        const requiredFields = {
            personal: [{
                name: 'dob',
                label: 'Date of Birth'
            }],
            location: [{
                name: 'country',
                label: 'Country'
            }],
            education: [{
                name: 'skillLevel',
                label: 'Skill level'
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
                <Accordion>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="personal" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Personal
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="personal">
                            <div className="px-3">
                                {/* <Form.Row>
                                    <Col md={3}>
                                        <Form.Label htmlFor="heading">Heading</Form.Label>
                                    </Col>
                                    <Col md={9} className="mb-3">
                                        <Form.Control autoComplete="off" value={formState.personal.heading || ''} type="text" name="heading" maxLength={120} onChange={(e) => handleFieldChange('personal', e)}/>
                                        <Form.Text className="text-muted float-left">Insert a positive message here.</Form.Text>
                                        <Form.Text className="float-right">120 max characters.</Form.Text>
                                    </Col>
                                </Form.Row> */}
                                <Form.Row className="mb-2">
                                    <Col md={3}>
                                        <Form.Label>Profile picture</Form.Label>
                                    </Col>
                                    <Col md={9}>
                                        <Form.Control name="avatar" type="file" multiple={false} accept=".png,.jpg,.jpeg" onChange={(e) => handleFieldChange('personal', e)}/>
                                        <Form.Text className="text-muted">Upload a new profile picture, ideal size should be 300x300</Form.Text>
                                        <Form.Text className="text-danger font-weight-bold">{errorMessage.avatar.invalid}</Form.Text>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col md={3}>
                                        <Form.Label>Cover image</Form.Label>
                                    </Col>
                                    <Col md={9}>
                                        <Form.Control name="cover" type="file" multiple={false} accept=".png,.jpg,.jpeg" onChange={(e) => handleFieldChange('personal', e)}/>
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
                                        <Form.Text className={errorMessage.dob.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                                    </Col>
                                </Form.Row>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="height" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Height / Weight
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="height">
                            <div className="px-3">
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
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="education" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Education
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="education">
                            <div className="px-3">
                                <Form.Row>
                                    <Col md={3}>
                                        <Form.Label htmlFor="skillLevel">Skill level</Form.Label>
                                    </Col>
                                    <Col md={9} className="mb-3">
                                        <Form.Control value={formState.education.skillLevel} as="select" name="skillLevel" onChange={(e) => handleFieldChange('education', e)}>
                                            <option value="">Choose skill level</option>
                                            <option value="youth">Youth</option>
                                            <option value="high-school">High School</option>
                                            <option value="college">College</option>
                                            <option value="pro">Pro</option>
                                        </Form.Control>
                                        <Form.Text className={errorMessage.skillLevel.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
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
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="location" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Location
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="location">
                            <div className="px-3">
                                <Form.Row>
                                    <Col md={3}>
                                        <Form.Label htmlFor="country">Country</Form.Label>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Control value={formState.location.country} type="text" name="country" onChange={e => handleFieldChange("location", e)}/>
                                        <Form.Text className={errorMessage.country.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                                        <Form.Text className="text-danger font-weight-bold">{errorMessage.country.invalid}</Form.Text>
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
                                        <Form.Text className="text-danger font-weight-bold">{errorMessage.zipcode.invalid}</Form.Text>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col md={3}>
                                        <Form.Label>City</Form.Label>
                                    </Col>
                                    <Col md={9} className="mb-3">
                                        <Form.Control value={formState.location.city} disabled={isForeigner} type="text" name="city" onChange={e => handleFieldChange("location", e)}/>
                                        <Form.Text className="text-danger font-weight-bold">{errorMessage.city.invalid}</Form.Text>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col md={3}>
                                        <Form.Label>State</Form.Label>
                                    </Col>
                                    <Col md={9} className="mb-3">
                                        <Form.Control value={formState.location.state} disabled={isForeigner} type="text" name="state" onChange={e => handleFieldChange("location", e)}/>
                                        <Form.Text className="text-danger font-weight-bold">{errorMessage.state.invalid}</Form.Text>
                                    </Col>
                                </Form.Row>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="references" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>References
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="references">
                            {!isSubscriber ? 
                                <div className="empty__profile-subscription">
                                    <p className="lead">
                                        Upgrade to <b>Athletes Pro</b> to gain access to references feature.
                                    </p>
                                    <div className="empty__profile-subscription__button">
                                        <Button variant="success" onClick={handleSubscribeNow}>Subscribe now</Button>
                                    </div>
                                </div> :
                                <div className="px-3">
                                    <Form.Row className="mx-0">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.first.name}
                                                type="text" 
                                                name="first"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.first.email}
                                                type="email" 
                                                name="first"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                    </Form.Row>
                                    <hr className="d-md-none"/>
                                    <Form.Row className="mx-0">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.second.name}
                                                type="text" 
                                                name="second"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.second.email}
                                                type="email" 
                                                name="second"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                    </Form.Row>
                                    <hr className="d-md-none"/>
                                    <Form.Row className="mx-0">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.third.name}
                                                type="text" 
                                                name="third"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            md="6">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                value={formState.personal.references.third.email}
                                                type="email" 
                                                name="third"
                                                onChange={e => handleFieldChange('references', e)} 
                                                autoComplete="new-password" />
                                        </Form.Group>
                                    </Form.Row>
                                </div>
                            }
                        </Accordion.Collapse>
                    </div>
                    <Button type="submit" variant="success" className="d-flex mr-3 float-right">
                        Update profile
                        {isLoading && <Loader
                                        className="pl-2"
                                        type="Oval"
                                        color="#00FF00"
                                        width={25}
                                        height={25}
                                    />}
                    </Button>
                </Accordion>
            </Form>
        </Card>
    )
}

ProfileDetails.propTypes = {
    setProfileRequest: PropTypes.func.isRequired,
    setProfileImagesRequest: PropTypes.func.isRequired,
    handlerPreviewImages: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    profile: state.profile
})

export default withRouter(connect(mapStateToProps, { setProfileRequest, setProfileImagesRequest })(ProfileDetails))