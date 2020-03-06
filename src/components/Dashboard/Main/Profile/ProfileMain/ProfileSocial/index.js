// Dependencies
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// Redux
import { setProfileRequest } from '../../../../../../store/profile/actions'

const ProfileSocial = ({ token, profile, setProfileRequest, history }) => {
    const [isSubscriber, setIsSubscriber] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState({
        social: {
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: ''
        }
    })

    useEffect(() => {
        const setFormFieldValues = () => {
            setFormState({
                profile: {
                    ...profile.personal
                },
                social: {
                    ...formState.social,
                    ...profile.social
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

    const handleFieldChange = (e) => {
        const { target } = e

        setFormState({
            social: {
                ...formState.social,
                [target.name]: target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await setProfileRequest(token, formState, false)

        if (!res) {
            // TODO set error handler
            setIsLoading(false)
            return
        }

        setIsLoading(false)
    }

    const handleSubscribeNow = () => {
        history.push('/dashboard/profile/subscribe')
    }

    if (!isSubscriber) {
        return (
            <div className="empty__profile-subscription">
                <p className="lead">
                    Upgrade to <b>Athletes Pro</b> to gain access to social network feature.
                </p>
                <div className="empty__profile-subscription__button">
                    <Button variant="success" onClick={handleSubscribeNow}>Subscribe now</Button>
                </div>
            </div>
        )
    }

    return (
        <Card className="shadow-sm p-4">
            <Form noValidate onSubmit={handleSubmit}>
                <h5>Social networks</h5>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                            <FaFacebookF color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control name="facebook" value={formState.social.facebook} type="text" size="sm" onChange={handleFieldChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                            <FaInstagram color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control name="instagram" value={formState.social.instagram}  type="text" size="sm" onChange={handleFieldChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                            <FaTwitter color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control name="twitter" value={formState.social.twitter}  type="text" size="sm" onChange={handleFieldChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={1}>
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                            <FaLinkedinIn color="#fff"/>
                        </div>
                    </Col>
                    <Col md={11} className="mb-3">
                        <Form.Control name="linkedin" value={formState.social.linkedin} type="text" size="sm" onChange={handleFieldChange}/>
                    </Col>
                </Form.Row>
                <hr />
                <Button 
                    type="submit" 
                    variant="success" 
                    className="float-right">
                        Update social  
                        {isLoading && <Loader className="pl-2" type="Oval" color="#00FF00" width={25} height={25}/>}
                </Button>
            </Form>
        </Card>
    )
}

ProfileSocial.propTypes = {
    token: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
    setProfileRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    profile: state.profile
})

export default withRouter(connect(mapStateToProps, { setProfileRequest })(ProfileSocial))