// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'
import { FiShare } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiClipboard } from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// Assets
import './style.css'
import avatarPlaceholder from '../../../../assets/images/user.png'

const PublicProfileSingleAside = ({ avatarUrl, fullName, subscriptionStatus, events, evaluations, videos, socialNetworks }) => {
    const [showModal, setShowModal] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    const isPro = subscriptionStatus === 'ACTIVE' ? true : false

    const handleOnCopyToClipboard = () => {
        setShowModal(false)
        setShowToast(true)
    }
    
    return (
        <>
        <aside className="page__public-profile-single__aside pb-4 pb-md-0">
            <Container fluid>
                <Row>
                    <Col xs={12} className="text-center">
                        {
                            avatarUrl ? 
                                <div className="page__public-profile-single__aside__avatar rounded-circle">
                                    <img src={avatarUrl} alt={`${fullName} avatar`}/>
                                </div> :
                                <div className="page__public-profile-single__aside__avatar rounded-circle" style={{background: `#f6f7f9`, padding: `2rem`}}>
                                    <img src={avatarPlaceholder} alt={`${fullName} has no avatar`}/>
                                </div>
                        }
                        <Button 
                            onClick={() => setShowModal(true)}
                            variant="light" 
                            className="page__public-profile-single__aside__share shadow-sm mb-4">
                            <FiShare /> Share
                        </Button>
                        <h4 className="text-md-left d-block ml-lg-2 mb-4">{fullName} {isPro && <Badge variant="success">Pro</Badge>}</h4>
                    </Col>
                    <Col xs={12} className="d-none d-md-flex flex-md-column flex-lg-row ml-lg-2 mb-4">
                        <div className="flex-lg-grow-1">
                            <h6 className="text-uppercase text-muted">events</h6>
                            <h4 className="font-weight-bold">{events.length}</h4>
                        </div>
                        <div className="flex-lg-grow-1">
                            <h6 className="text-uppercase text-muted">evaluations</h6>
                            <h4 className="font-weight-bold">{evaluations.length}</h4>
                        </div>
                    </Col>
                    {/* <Col xs={12} className="d-none d-md-block">
                        <h6 className="mr-3 d-inline-block text-uppercase text-muted">videos</h6><FiVideo color="#6c757d"/>
                        <div className="page__public-single__aside__videos d-flex">
                            <div className="rounded">
                            </div>
                            <div className="rounded">
                            </div>
                            <div className="rounded">
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
            <div className="public-profile__single__main__social d-md-none">
                <div className="public-profile__single__main__social d-flex justify-content-center">
                    {
                        socialNetworks.facebook ? 
                            <a href={socialNetworks.facebook} target="_blank" rel="noopener noreferrer"> 
                                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                                    <FaFacebookF color="#fff"/>
                                </div>
                            </a> :
                            <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#c5c9d2', width: `2rem`, height: `2rem`}}>
                                <FaFacebookF color="#fff"/>
                            </div>
                    }
                    {
                        socialNetworks.instagram ?
                            <a href={socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                                    <FaInstagram color="#fff"/>
                                </div>
                            </a> :
                            <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#c5c9d2', width: `2rem`, height: `2rem`}}>
                                <FaInstagram color="#fff"/>
                            </div>
                    }
                    {
                        socialNetworks.twitter ?
                            <a href={socialNetworks.twitter} target="_blank" rel="noopener noreferrer"> 
                                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                                    <FaTwitter color="#fff"/>
                                </div>
                            </a> :
                            <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#c5c9d2', width: `2rem`, height: `2rem`}}>
                                <FaTwitter color="#fff"/>
                            </div>
                    }
                    {
                        socialNetworks.linkedin ?
                            <a href={socialNetworks.linkedin} target="_blank" rel="noopener noreferrer">
                                <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                                    <FaLinkedinIn color="#fff"/>
                                </div>
                            </a> :
                            <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#c5c9d2', width: `2rem`, height: `2rem`}}>
                                <FaLinkedinIn color="#fff"/>
                            </div>
                    }
                </div>
            </div>
        </aside>
        <Modal show={showModal} onHide={toggleModal} className="page__public-profile-single__aside__modal">
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title>Share</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row">
                    <CopyToClipboard text={window.location.href} onCopy={handleOnCopyToClipboard}>
                        <div className="text-center p-2 page__public-profile-single__aside__modal__share">
                            <div className="rounded-circle bg-secondary mx-auto justify-content-center align-items-center d-flex" style={{width: 55, height: 55}}>
                                <FiClipboard size={`1.3rem`} color={`#eee`}/>
                            </div>
                            <span>Copy to clipboard</span>
                        </div>
                    </CopyToClipboard>
                    <a href="mailto:?subject=Hey!%20Check%20my%20profile%20at%20Recruits%20Pro" className="text-center p-2 page__public-profile-single__aside__modal__share">
                        <div className="rounded-circle bg-secondary mx-auto justify-content-center align-items-center d-flex" style={{width: 55, height: 55}}>
                            <FiMail size={`1.3rem`} color={`#eee`}/>
                        </div>
                        <span>Email</span>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
        <div className="toast-fixed-top"> 
            <Toast 
                onClose={() => setShowToast(false)} 
                show={showToast} 
                delay={8000} 
                autohide 
                style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#28a745`,
                    color: `#eee`,
                    width: `100%`
                }}>
                <Toast.Body className="text-center">
                    Copied to clipboard!
                </Toast.Body>
            </Toast>
        </div>
        </>
    )
}

PublicProfileSingleAside.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    subscriptionStatus: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
    evaluations: PropTypes.array.isRequired,
    socialNetworks: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
        linkedin: PropTypes.string,
    }).isRequired,
    videos: PropTypes.array
}

export default PublicProfileSingleAside