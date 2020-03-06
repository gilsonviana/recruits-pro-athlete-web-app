// Dependencies
import React, { useState } from 'react'
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaArrowLeft } from "react-icons/fa";

const CreateProfileSports = ({ handleTabKey, handleOnChange, handleSubmit }) => {
    const [otherSport, setOtherSport] = useState({
        primary: false,
        secondary: false
    })
    const [errorMessage, setErrorMessage] = useState({
        name: {
            required: false,
        },
        other: {
            required: false,
        },
        positions: {
            required: false,
        }
    })

    const handleValidation = (e, key = 'primary') => {
        const { target } = e
        
        if (key === 'primary') {
            if (target.name === 'name') {
                if (target.value === '') {
                    setOtherSport({
                        ...otherSport,
                        primary: false
                    })
                    setErrorMessage({
                        ...errorMessage,
                        [target.name]: {
                            required: true
                        }
                    })
                    handleOnChange(e, key)
                    return
                }
    
                if (target.value === 'other') {
                    setErrorMessage({
                        ...errorMessage,
                        [target.name]: {
                            required: false
                        }
                    })
                    setOtherSport({
                        ...otherSport,
                        primary: true
                    })
                    return
                }
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: false
                    }
                })
                setOtherSport({
                    ...otherSport,
                    primary: false
                })
                handleOnChange(e, key)
            }
    
            if (target.name === 'other') {
                if (target.value === '') {
                    setErrorMessage({
                        ...errorMessage,
                        [target.name]: {
                            required: true
                        }
                    })
                    handleOnChange(e, key)
                    return
                }
    
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: false
                    }
                })
                handleOnChange(e, key)
            }
    
            if (target.name === 'positions') {
                if (target.value === '') {
                    setErrorMessage({
                        ...errorMessage,
                        [target.name]: {
                            required: true
                        }
                    })
                    handleOnChange(e, key)
                    return
                }
    
                setErrorMessage({
                    ...errorMessage,
                    [target.name]: {
                        required: false
                    }
                })
                handleOnChange(e, key)
            }
        }

        if (key === 'secondary') {
            if (target.name === 'name' && target.value === 'other') {
                setOtherSport({
                    ...otherSport,
                    secondary: true
                })
                return
            }
    
            if (target.name === 'name' && target.value !== 'other') {
                setOtherSport({
                    ...otherSport,
                    secondary: false
                })
                return
            }
        }

        handleOnChange(e, key)
    }
    
    return (
        <div className="create-profile__sport py-4">
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Label className="font-weight-bold">Primary</Form.Label>
                <Form.Group>
                    <Form.Label>Sport</Form.Label>
                    <Form.Control as="select" onChange={handleValidation} name="name">
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
                        <Form.Control type="text" name="other" onChange={handleValidation}/>
                        <Form.Text className={errorMessage.other.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                    </Form.Group>
                }
                <Form.Group>
                    <Form.Label>Positions</Form.Label>
                    <Form.Control type="text" name="positions" onChange={handleValidation}/>
                    <Form.Text className={errorMessage.positions.required ? 'text-danger font-weight-bold':'text-muted'}>Required</Form.Text>
                    <Form.Text className="text-muted">Separate positions by comma.</Form.Text>
                </Form.Group>
                <hr />
                <Form.Label className="font-weight-bold">Secondary</Form.Label>
                <Form.Group>
                    <Form.Label>Sport</Form.Label>
                    <Form.Control as="select" name="name" onChange={e => handleValidation(e, 'secondary')}>
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
                    <Form.Control type="text" name="other" onChange={e => handleValidation(e, 'secondary')} />
                </Form.Group>}
                <Form.Group>
                    <Form.Label>Positions</Form.Label>
                    <Form.Control type="text" name="positions" onChange={e => handleValidation(e, 'secondary')}/>
                    <Form.Text className="text-muted">Separate positions by comma.</Form.Text>
                </Form.Group>
                <Form.Group className="clearfix">
                    <Button className="create-profile__education__button-next float-left" onClick={() => handleTabKey('education')}>
                        <FaArrowLeft className="mr-2"/>Previous
                    </Button>
                    <Button type="submit" className="create-profile__education__button-next float-right mt-3 mt-md-0">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

CreateProfileSports.propTypes = {
    handleTabKey: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default CreateProfileSports