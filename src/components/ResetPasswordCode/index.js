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

// Assets
import './style.css'
import logo from '../../assets/images/logo.png'
import Padlock from '../../assets/images/padlock.png'

const ResetPasswordCode = ({ 
    history, 
    code
}) => {
    const [formState, setFormState] = useState('')
    const [showToast, setShowToast] = useState({
        visible: false,
        text: ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!formState) {
            setShowToast({
                visible: true,
                text: 'Please insert verification code.'
            })
            return
        }
        
        if (formState !== code) {
            setShowToast({
                visible: true,
                text: 'Verification doesn\'t match.'
            })
            return
        }
        
        history.push('/reset-password/new')
    }
    
    const handleOnChange = (e) => {
        const { target } = e
        setFormState(target.value)
        
        if (target.value === code) {
            history.push('/reset-password/new')
        }
    }

    return (
        <div className="page__reset-password-code-code">
            <Toast
                onClose={() => setShowToast({ visible: false, text: '' })}
                show={showToast.visible}
                delay={3000}
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
                    {showToast.text}
                </Toast.Body>
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
                                        Reset password
                                    </h3>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <InputText
                                                type="text"
                                                placeholder="Enter verification code"
                                                name="code"
                                                onChange={handleOnChange}
                                            />
                                            <Form.Text className="text-muted">
                                                Enter the verification code sent ot you by email.
                                            </Form.Text>
                                        </Form.Group>
                                        <Button type="submit">
                                            Submit
                                        </Button>
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

ResetPasswordCode.propTypes = {
    history: PropTypes.object.isRequired,
    code: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    code: state.auth.code
})

export default connect(mapStateToProps)(withRouter(ResetPasswordCode))
