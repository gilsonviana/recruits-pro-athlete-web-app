// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { FiVideo } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// Assets
import './style.css'

const PublicProfileSingleAside = () => {
    return (
        <aside className="page__public-profile-single__aside pb-4 pb-md-0">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <div className="page__public-profile-single__aside__avatar rounded-circle">
                            <img src="https://recruits-pro-athletes-avatar-cover.s3.us-east-2.amazonaws.com/1582592813685avatr.jpg"/>
                        </div>
                        <h4 className="d-inline-block mb-4">Gilson Viana <Badge variant="success">Pro</Badge></h4>
                    </Col>
                    <Col xs={12} className="d-none d-md-flex flex-md-column flex-lg-row mb-4">
                        <div className="flex-lg-grow-1">
                            <h6 className="text-uppercase text-muted">events</h6>
                            <h4 className="font-weight-bold">15</h4>
                        </div>
                        <div className="flex-lg-grow-1">
                            <h6 className="text-uppercase text-muted">evaluations</h6>
                            <h4 className="font-weight-bold">36</h4>
                        </div>
                    </Col>
                    <Col xs={12} className="d-none d-md-block">
                        <h6 className="mr-3 d-inline-block text-uppercase text-muted">videos</h6><FiVideo color="#6c757d"/>
                        <div className="page__public-single__aside__videos d-flex">
                            <div className="rounded">
                            </div>
                            <div className="rounded">
                            </div>
                            <div className="rounded">
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="public-profile__single__main__social d-md-none">
                <div className="public-profile__single__main__social d-flex justify-content-center">
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                        <FaFacebookF color="#fff"/>
                    </div>
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                        <FaInstagram color="#fff"/>
                    </div>
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                        <FaTwitter color="#fff"/>
                    </div>
                    <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                        <FaLinkedinIn color="#fff"/>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default PublicProfileSingleAside