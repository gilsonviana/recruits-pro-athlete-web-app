// Dependencies
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast'
import Loader from 'react-loader-spinner'
import { Button, InputText } from '../../styled-components'

// Redux
import { doLogin } from '../../store/auth/actions'
import { getSubscriptionPlans } from '../../store/plans/actions'

// Assets
import logo from '../../assets/images/logo.png'
import "./style.css";

const LoginPage = ({ history, token, doLogin, getSubscriptionPlans }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState({
        email: '',
        password: ''
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

    useEffect(() => {
        const verifyToken = () => {
            if (token) {
                history.push('/redirect')
            }
        }

        verifyToken()
        
        getSubscriptionPlans()
    }, [getSubscriptionPlans, history, token])

    const handleChange = (e) => {
        const { target } = e
        isFieldValid(e)
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            await doLogin(formState)
            history.push('/redirect')
        } catch (e) {
            setIsLoading(false)
            setShowToast(true)
            return
        }
    }

    const isFormValid = () => {
        return Object.values(showError.name).every(item => item.message === '')
    }

    // onBlur event
    const isFieldValid = (e) => {
        let res = false
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

            res = true
            _clearErrorMessage(target.name)
        }

        return res
    }

    // onFocus event
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
        <div className="page__login">
            {(isLoading) && (
                <div className="page__overlay__loading">
                    <Loader
                        type="Oval"
                        color="#00FF00"
                        height={100}
                        width={100}
                    />
                </div>
            )}
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide style={{
                position: 'absolute',
                left: `50%`,
                transform: `translateX(${-50}%)`,
                backgroundColor: `#eb5a46`,
                color: `#eee`,
                width: `100%`
            }}>
                <Toast.Body>Unable to login user. Email or password is wrong.</Toast.Body>
            </Toast>
            <Container fluid style={{
                justifyContent: 'space-between'
            }}>
                <header className="page__login__header">
                    <Link to="/">
                        <img src={logo} alt="Recruits pro logo" />
                    </Link>
                </header>
                <Row>
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <section className="page__login__content">
                            <div className="page__login__content__box">
                                <div className="page__login__content__box__form">
                                    <h3 className="page__login__content__box__form__title font-weight-bold">Athlete Login</h3>
                                    <form onSubmit={handleSubmit}>
                                        {
                                            (showError.isVisible) &&
                                            <>
                                                <p className="text-danger my-1">{showError.name.email.message}</p>
                                            </>
                                        }
                                        <InputText autoComplete="on" type="email" placeholder="Enter email" name="email" onChange={handleChange} onBlur={isFieldValid} />
                                        <InputText autoComplete="on" type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                                        {
                                            (!isFormValid() || !formState.password || !formState.email) ?
                                                <Button disabled={true} className="text-dark" type="submit">Log in</Button> :
                                                <Button disabled={false} className="text-dark" type="submit">Log in</Button>
                                        }
                                    </form>
                                    <div className="page__login__content__footer">
                                        <Link to="/reset-password" className="text-dark">Forgot password?</Link>
                                        <Link to="/signup" className="text-dark">Sign up for an account</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row style={{
                    position: 'absolute',
                    width: `100%`,
                    bottom: 0,
                    left: 0,
                    height: `3rem`
                }}>
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                        <footer className="page__login__footer">
                            <Link to="" className="text-dark">Privacy policy</Link>
                            <p>/</p>
                            <Link to="" className="text-dark">Terms of service</Link>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

LoginPage.propTypes = {
    history: PropTypes.object.isRequired,
    token: PropTypes.string,
    doLogin: PropTypes.func.isRequired,
    getSubscriptionPlans: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
})

export default withRouter(connect(mapStateToProps, { doLogin, getSubscriptionPlans })(LoginPage))
