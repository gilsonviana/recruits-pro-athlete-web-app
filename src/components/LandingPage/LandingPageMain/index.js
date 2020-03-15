import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'

const LandingPageMain = () => {
    return (
        <main className="page__landing__main">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="page__landing__main__content">
                            <h1 className="page__landing__main__content__title">Build your Professional Career</h1>
                            <p className="mt-4 lead text-black-50">
                                <b>Athletes Pro</b> is the go-to tool to create a great
                                impression on coaches, scouts and others.
                                Read insightful notes from evaluators, track and analise 
                                your progress and more.
                            </p>
                            <Link to="/signup" className="page__landing__main__content__btn mt-4 d-block d-md-inline-block font-weight-bold text-dark">
                                Sign up
                            </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </main>
    )
}

export default LandingPageMain
