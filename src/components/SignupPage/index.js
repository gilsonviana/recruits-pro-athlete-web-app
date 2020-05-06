// Dependencies
import React, { useState, useEffect } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast'
import { Button, InputText } from '../../styled-components'

// Services
import { getAthleteById } from '../../services/user'

// Redux
import { signUp } from '../../store/auth/actions'
import { getSubscriptionPlans } from '../../store/subscriptionPlans/actions'

// Assets
import logo from '../../assets/images/logo.png'
import "./style.css";

const SignupPage = ({ history, signUp, getSubscriptionPlans }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: ''
  })

  const [showToast, setShowToast] = useState({
    isVisible: false,
    message: '' // Email already in use by another account.
  })

  const [showError, setShowError] = useState({
    isVisible: true,
    name: {
      email: {
        message: null
      },
      username: {
        message: null
      },
      password: {
        message: null
      }
    }
  })
  
  const { userId } = useParams()

  useEffect(() => {  
    const getUrlParams = async () => {
      const res = await getAthleteById(userId)
      setFormState({
        ...formState,
        email: res.email,
        username: res.fullName
      })
    }

    if (userId) {
      getUrlParams()
    }
  }, [userId])

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
    const res = await signUp(formState)

    if (!res) {
      setShowToast({
        isVisible: true,
        message: 'Email already in use. Login if you have an account.'
      })
      return
    }

    await getSubscriptionPlans()

    setIsLoading(false)
    history.push('/choose-plan')
  }

  const isFormValid = () => {
    return Object.values(showError.name).every(item => item.message === '')
  }

  // onBlur event
  const isFieldValid = (e)=> {
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

    if (target.name === 'username') {
      if (!target.value) {  
        return setShowError({
          isVisible: true,
          name: {
            ...showError.name,
            [target.name]: {
              message: 'Full name is required to create profile.'
            }
          }
        })
      }

      res = true
      _clearErrorMessage(target.name)
    }

    if (target.name === 'password') {
      if (!target.value || target.value.length < 6) {
        return setShowError({
          isVisible: true,
          name: {
            ...showError.name,
            [target.name]: {
              message: 'Password must be at least 6 characters.'
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
    <div className="page__signup">
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
      <Toast onClose={() => setShowToast({ isVisible: false, message: ''})} show={showToast.isVisible} delay={5000} autohide style={{
        position: 'absolute',
        left: `50%`,
        transform: `translateX(${-50}%)`,
        backgroundColor: `#eb5a46`,
        color: `#eee`,
        width: `100%`
      }}>
        <Toast.Body>{showToast.message}</Toast.Body>
      </Toast>
      <Container fluid style={{
        justifyContent: 'space-between'
      }}>
        <header className="page__signup__header">
          <Link to="/">
            <img src={logo} alt="Recruits pro logo"/>
          </Link>
        </header>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <section className="page__signup__content">
              <div className="page__signup__content__box">
                <div className="page__signup__content__box__form">
                  <h3 className="page__signup__content__box__form__title font-weight-bold">Sign up to Athletes Pro</h3>
                  <form onSubmit={handleSubmit}>
                    {
                      (showError.isVisible) && 
                      <>
                        <p className="text-danger my-1">{showError.name.email.message}</p>
                        <p className="text-danger my-1">{showError.name.username.message}</p>
                        <p className="text-danger my-1">{showError.name.password.message}</p>
                      </>
                    }
                    <InputText value={formState.email} type="email" placeholder="Enter email" name="email" onChange={handleChange} onBlur={isFieldValid} />
                    <InputText value={formState.username} type="text" placeholder="Enter full name" name="username" onChange={handleChange} onBlur={isFieldValid} />
                    <InputText type="password" placeholder="Enter password" name="password" onChange={handleChange} onBlur={isFieldValid} />
                    <p className="my-3">
                      By signing up, you agree and accept our <Link to="" className="font-weight-bold" style={{color: '#00EC00'}}>Terms of Use</Link> and <Link to="" className="font-weight-bold" style={{color: '#00EC00'}}>Privacy Policy</Link>.
                    </p>
                    {
                      (isFormValid()) ?
                      <Button disabled={false} type="submit">Sign up</Button> :
                      <Button disabled={true} type="submit">Sign up</Button> 
                    }
                  </form>
                  <div className="page__signup__content__footer">
                    <Link to="/login" className="text-dark">Login</Link>
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
            <footer className="page__signup__footer">
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

export default connect(null, { signUp, getSubscriptionPlans })(withRouter(SignupPage));
