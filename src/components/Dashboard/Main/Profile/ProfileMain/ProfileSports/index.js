// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'
import Toast from 'react-bootstrap/Toast'
import Accordion from 'react-bootstrap/Accordion'
import { FaCaretRight } from 'react-icons/fa'

// Assets
import { setProfileRequest } from '../../../../../../store/profile/actions'

const ProfileSports = ({ token, sports, setProfileRequest }) => {
    const [otherSport, setOtherSport] = useState({
        primary: false,
        secondary: false
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState({
        isVisible: false, 
        message: ''
    })
    const [formState, setFormState] = useState({
        sports: {
            primary: {
                name: '',
                positions: ''
            },
            secondary: {
                name: '',
                positions: ''
            }
        }
    })
    const [errorMessage, setErrorMessage] = useState({
        name: {
            required: ''
        },
        other: {
            required: '',
        },
        positions: {
            required: ''
        }
    })

    useEffect(() => {
        const setFormStateValues = () => {
            const primaryPositions = sports.primary.positions.join(', ')
            const secondaryPositions = sports.secondary.positions.join(', ')

            const newSports = {
                sports: {
                    primary: {
                        ...sports.primary,
                        positions: primaryPositions
                    },
                    secondary: {
                        ...sports.secondary,
                        positions: secondaryPositions
                    }
                }
            }

            setFormState({
                ...newSports
            })
        }
        setFormStateValues()
    }, [sports])

    const handleOnChange = (e, key = '') => {
        const { target } = e

        if (key === 'secondary') {
            if (target.name === 'name' && target.value === 'other') {
                setOtherSport({
                    ...otherSport,
                    secondary: true
                })
            }

            if (target.name === 'name' && target.value !== 'other') {
                setOtherSport({
                    ...otherSport,
                    secondary: false
                })
            }

            if (target.name === 'other') {
                setFormState({
                    sports: {
                        ...formState['sports'],
                        [key]: {
                            ...formState['sports'][key],
                            name: target.value
                        }
                    }
                })
                return
            }

            setFormState({
                sports: {
                    ...formState['sports'],
                    [key]: {
                        ...formState['sports'][key],
                        [target.name]: target.value
                    }
                }
            })
            return
        }

        if (target.name === 'name' && target.value === 'other') {
            setOtherSport({
                ...otherSport,
                primary: true
            })
        }

        if (target.name === 'name' && target.value !== 'other') {
            setOtherSport({
                ...otherSport,
                primary: false
            })
        }

        if (target.name === 'other') {
            _handleFieldValidation(e)
            setFormState({
                sports: {
                    ...formState['sports'],
                    primary: {
                        ...formState['sports']['primary'],
                        name: target.value
                    }
                }
            })
            return
        }

        _handleFieldValidation(e)
        setFormState({
            sports: {
                ...formState['sports'],
                primary: {
                    ...formState['sports']['primary'],
                    [target.name]: target.value
                }
            }
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if (_handleFormValidation(formState)) {
            try {
                setIsLoading(true)
                await setProfileRequest(token, formState)
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

    const _handleFieldValidation = ({ target }) => {
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

    const _handleFormValidation = form => {
        const requiredFields = {
            primary: [{
                name: 'name',
                label: 'Sport name'
            }, {
                name: 'positions',
                label: 'positions'
            }]
        }
        const errorFields = []
        const ruleKeys = Object.keys(requiredFields)
        const formKeys = Object.keys(form.sports)

        if (formKeys.length > 0) {
            ruleKeys.forEach(rule => {
                if (form.sports.hasOwnProperty(rule)) {
                    requiredFields[rule].map(({ name: key, label }) => {
                        if (!form['sports'][rule][key]) {
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
            <Form noValidate onSubmit={handleOnSubmit}>
                <Accordion>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="primary" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Primary
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="primary">
                            <div className="px-3">
                                <Form.Group>
                                    <Form.Label>Sport</Form.Label>
                                    <Form.Control as="select" onChange={handleOnChange} name="name" value={formState.sports.primary.name}>
                                        <option value="">Choose a sport</option>
                                        <option value="baseball">Baseball</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="football">Football</option>
                                        <option value="soccer">Soccer</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                    <Form.Text className={errorMessage.name.required ? 'font-weight-bold text-danger':'text-muted'}>Required</Form.Text>
                                </Form.Group>
                                {
                                    (otherSport.primary) && 
                                    <Form.Group>
                                        <Form.Label>Other sport</Form.Label>
                                        <Form.Control type="text" name="other" onChange={handleOnChange} value={formState.sports.primary.name}/>
                                        <Form.Text className={errorMessage.other.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                                    </Form.Group>
                                }
                                <Form.Group>
                                    <Form.Label>Positions</Form.Label>
                                    <Form.Control type="text" name="positions" onChange={handleOnChange} value={formState.sports.primary.positions}/>
                                    <Form.Text className={errorMessage.positions.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                                    <Form.Text className="text-muted">Separate positions by comma.</Form.Text>
                                </Form.Group>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as="h5" variant="link" eventKey="secondary" className="profile__form__toggle">
                            <FaCaretRight className="float-left mt-1" color="#00ff00"/>Secondary
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="secondary">
                            <div className="px-3">
                                <Form.Group>
                                    <Form.Label>Sport</Form.Label>
                                    <Form.Control as="select" name="name" onChange={e => handleOnChange(e, 'secondary')} value={formState.sports.secondary.name}>
                                        <option value="">Choose a sport</option>
                                        <option value="baseball">Baseball</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="football">Football</option>
                                        <option value="soccer">Soccer</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                </Form.Group>
                                {otherSport.secondary && 
                                <Form.Group>
                                    <Form.Label>Other sport</Form.Label>
                                    <Form.Control type="text" name="other" onChange={e => handleOnChange(e, 'secondary')} value={formState.sports.secondary.name}/>
                                </Form.Group>}
                                <Form.Group>
                                    <Form.Label>Positions</Form.Label>
                                    <Form.Control type="text" name="positions" onChange={e => handleOnChange(e, 'secondary')} value={formState.sports.secondary.positions}/>
                                    <Form.Text className="text-muted">Separate positions by comma.</Form.Text>
                                </Form.Group>
                            </div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
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
            </Form>
        </Card>
    )
}

ProfileSports.propTypes = {
    token: PropTypes.string.isRequired,
    sports: PropTypes.object.isRequired,
    setProfileRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    token: state.auth.token,
    sports: state.profile.sports
})

export default connect(mapStateToProps, { setProfileRequest })(ProfileSports)