// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { FiVideo } from 'react-icons/fi'

// Assets
import './style.css'

const PublicProfileSingleAside = () => {
    return (
        <aside className="page__public-profile-single__aside">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <div className="page__public-profile-single__aside__avatar rounded-circle">
                            <img src="https://recruits-pro-athletes-avatar-cover.s3.us-east-2.amazonaws.com/1582592813685avatr.jpg"/>
                        </div>
                        <h2 className="d-inline-block mb-4">Gilson Viana <Badge variant="success">Pro</Badge></h2>
                    </Col>
                    <Col xs={12} className="d-none d-md-flex flex-md-column flex-lg-row mb-4">
                        <div className="flex-lg-grow-1">
                            <h5 className="text-uppercase text-muted">events</h5>
                            <h3 className="font-weight-bold">15</h3>
                        </div>
                        <div className="flex-lg-grow-1">
                            <h5 className="text-uppercase text-muted">evaluations</h5>
                            <h3 className="font-weight-bold">36</h3>
                        </div>
                    </Col>
                    <Col xs={12} className="d-none d-md-block">
                        <div className="d-flex align-items-baseline">
                            <h5 className="mr-3 d-inline-block text-uppercase text-muted">videos</h5><FiVideo color="#6c757d"/>
                        </div>
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
        </aside>
    )
}

export default PublicProfileSingleAside