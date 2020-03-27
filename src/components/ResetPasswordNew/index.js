// Dependencies
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, InputText } from '../../styled-components'

// Redux
import { setNewPassword } from '../../store/auth/actions'

// Assets
import './style.css'
import logo from '../../assets/images/logo.png'
import Padlock from '../../assets/images/padlock.png'

const ResetPasswordNew = ({ 
    history, 
    setNewPassword,
    resetToken
}) => {
    const [formState, setFormState] = useState({
        password: '',
        confirmPassword: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const [showToast, setShowToast] = useState(false)

    const [showError, setShowError] = useState({
        isVisible: true,
        name: {
            password: {
                message: null
            },
            confirmPassword: {
                message: null
            }
        }
    })
    
    const handleSubmit = async (e) => {
        const { password } = formState
        e.preventDefault()

        setIsLoading(true)
        
        const res = await setNewPassword(resetToken, password)
        
        if (!res) {
            setIsLoading(false)
            setShowToast(true)
            return
        }

        history.push('/login')
    }
    
    const handleOnChange = (e) => {
        const { target } = e
        isFieldValid(e)
        setFormState({  
            ...formState,
            [target.name]: target.value
        })
    }

    const isFieldValid = (e) => {
        const { target } = e

        if (target.name === 'password') {
            if (!target.value || target.value.length < 6) {
                return setShowError({
                    isVisible: true,
                    name: {
                        ...showError.name,
                        password: {
                            message: 'Password must be at least 6 characters.'
                        }
                    }
                })
            }
            return _clearErrorMessage(target.name)
        }

        // confirm password
        if (target.value !== formState.password) {
            return setShowError({
                isVisible: true,
                name: {
                    ...showError.name,
                    confirmPassword: {
                        message: 'Password does not match.'
                    }
                }
            })
        }

        return _clearErrorMessage(target.name)
    }

    const isFormValid = () => {
        return Object.values(showError.name).every(item => item.message === '')
    }

    const _clearErrorMessage = (name) => {
        setShowError({
            isVisible: false,
            name: {
                ...showError.name,
                [name]: {
                    message: ''
                }
            }
        })
    }

    return (
        <div className="page__reset-password-code-code">
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide style={{
                position: 'absolute',
                left: `50%`,
                transform: `translateX(${-50}%)`,
                backgroundColor: `#eb5a46`,
                color: `#eee`,
                width: `100%`
            }}>
                <Toast.Body>Something went wrong. Please, try again later.</Toast.Body>
            </Toast>
            <Container
                fluid
                style={{
                    justifyContent: "space-between"
                }}
            >
                <header className="page__reset-password-code__header">
                    <Link to="/">
                        <img src={logo} alt="Recruits pro logo" />
                    </Link>
                </header>
                <Row>
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <section className="page__reset-password-code__content">
                            <div className="page__reset-password-code-code__content__box">
                                <div className="page__reset-password-code__content__box__form">
                                    <img src={Padlock} alt="shield" className="page__reset-password-code__content__box__form__icon"/>
                                    <h3 className="page__reset-password-code__content__box__form__title font-weight-bold">
                                        Create new password
                                    </h3>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        {
                                            (showError.isVisible) && 
                                            <>
                                                <p className="text-danger my-1">{showError.name.password.message}</p>
                                                <p className="text-danger my-1">{showError.name.confirmPassword.message}</p>
                                            </>
                                        }
                                        <Form.Group>
                                            <Form.Label className="font-weight-bold">Password</Form.Label>
                                            <InputText
                                                type="password"
                                                name="password"
                                                onChange={handleOnChange}
                                                onBlur={isFieldValid}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="font-weight-bold">Confirm password</Form.Label>
                                            <InputText
                                                type="password"
                                                name="confirmPassword"
                                                onChange={handleOnChange}
                                                onBlur={isFieldValid}
                                            />
                                        </Form.Group>
                                        {
                                        isFormValid ?
                                            <Button disabled={false} loading={isLoading} type="submit">
                                                Submit
                                            </Button> :
                                            <Button disabled={true} type="submit">
                                                Submit
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

ResetPasswordNew.propTypes = {
    history: PropTypes.object.isRequired,
    setNewPassword: PropTypes.func.isRequired,
    resetToken: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    resetToken: state.auth.resetToken
})

export default connect(mapStateToProps, { setNewPassword })(withRouter(ResetPasswordNew))
