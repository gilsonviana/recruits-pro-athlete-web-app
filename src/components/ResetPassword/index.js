// Dependencies
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, InputText } from '../../styled-components'

// Redux
import { getResetToken } from '../../store/auth/actions'

// Assets
import './style.css'
import logo from '../../assets/images/logo.png'
import Padlock from '../../assets/images/padlock.png'

const ResetPassword = ({ history, getResetToken }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState({
        email: '',
    })
    const [showToast, setShowToast] = useState(false)
    const [showError, setShowError] = useState({
        isVisible: true,
        name: {
            email: {
                message: null
            }
        }
    })

    let location = useLocation()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await getResetToken(formState.email)
            setIsLoading(false)
            history.push(`${location.pathname}/code`)
        } catch (e) {
            setIsLoading(false)
            setShowToast(true)
        }
    }

    const handleOnChange = (e) => {
        const { target } = e
        isFieldValid(e)
        setFormState({
            [target.name]: target.value
        })
    }

    const isFieldValid = (e) => {
        const { target } = e

        if (target.name === 'email') {
            const reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (!reg.test(target.value)) {
                return setShowError({
                    isVisible: true,
                    name: {
                        ...showError.name,
                        [target.name]: {
                            message: 'Please, insert a valid email address.'
                        }
                    }
                })
            }
        }
        _clearErrorMessage(target.name)
    }

    const isFormValid = () => {
        return Object.values(showError.name).every(item => item.message === '')
    }

    const _clearErrorMessage = (name) => {
        setShowError({
            ...showError,
            name: {
                ...showError.name,
                [name]: {
                    message: ''
                }
            }
        })
    }

    return (
        <div className="page__reset-password">
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={5000}
                autohide
                style={{
                    position: "absolute",
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#eb5a46`,
                    color: `#eee`,
                    width: `100%`
                }}
            >
                <Toast.Body>
                    Email not registered.
                </Toast.Body>
            </Toast>
            <Container
                fluid
                style={{
                    justifyContent: "space-between"
                }}
            >
                <header className="page__reset-password__header">
                    <Link to="/">
                        <img src={logo} alt="Recruits pro logo" />
                    </Link>
                </header>
                <Row>
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <section className="page__reset-password__content">
                            <div className="page__reset-password__content__box">
                                <div className="page__reset-password__content__box__form">
                                    <img src={Padlock} alt="shield" className="page__reset-password__content__box__form__icon"/>
                                    <h3 className="page__reset-password__content__box__form__title font-weight-bold">
                                        Reset password
                                    </h3>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Group>
                                            {showError.isVisible && 
                                                <Form.Text className="text-danger my-1">
                                                    {showError.name.email.message}
                                                </Form.Text>
                                            }
                                            <InputText
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                onChange={handleOnChange}
                                                onBlur={isFieldValid}
                                            />
                                            <Form.Text className="text-muted">
                                                Enter the email address associated with your Recruits Pro Athlete account.
                                            </Form.Text>
                                        </Form.Group>
                                        {isFormValid() ? 
                                            <Button disabled={false} type="submit">
                                                Request code
                                            </Button> : 
                                            <Button disabled={true} type="submit" loading={isLoading}>
                                                Request code
                                            </Button>
                                        }
                                    </Form>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row
                    style={{
                        position: "absolute",
                        width: `100%`,
                        bottom: 0,
                        left: 0,
                        height: `3rem`
                    }}
                >
                </Row>
            </Container>
        </div>
    );
};

ResetPassword.propTypes = {
    history: PropTypes.object.isRequired,
    getResetToken: PropTypes.func.isRequired
}

export default withRouter(connect(null, { getResetToken }))
