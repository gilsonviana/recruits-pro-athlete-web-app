import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LastEvaluation from './LastEvaluation'

import './style.css'

const Main = (props) => {
    const [evaluationsState, setEvaluationsState] = useState(null)

    useEffect(() => {
        const getEvaluations = () => {
            // TODO mockup
            const evaluation = {
                form: {
                    sport: 'Baseball',
                    name: 'Baseball Assessment',
                    categories: [{
                        name: 'Hitting'
                    }, {
                        name: 'Pitching'
                    }],
                    metrics: [{
                        name: 'Bat speed',
                        category: 'Hitting',
                        value: '85',
                        notes: 'Really good'
                    }, {
                        name: 'Arm velocity',
                        category: 'Pitching',
                        value: '51',
                        notes: 'Not so good'
                    }]
                },
                location: {
                    description: '',
                    placeId: ''
                },
                notes: '',
                createdAt: ''
            }

            setEvaluationsState([evaluation])
        }

        setTimeout(() => {
            getEvaluations()
        }, 0)
    }, [])

    return (
        <main className="app__main">
            <div className="wrapper">
                <div className="page">
                    <div className="page__inner">
                        <header className="page__title__bar">
                            <div className="d-flex flex-column flex-md-row">
                                <p className="lead">
                                    <span className="font-weight-bold">Hi, Beni.</span> 
                                    <span className="d-block text-muted">
                                        4 days since your last evaluation.
                                    </span>
                                </p>
                            </div>
                        </header>
                        <Container fluid>
                            <Row>
                                <Col xs={12} md={6} lg={4}>
                                    {(!evaluationsState) ? 
                                        <>
                                            <Skeleton />
                                            <Skeleton count={3} />
                                        </> :
                                        <LastEvaluation evaluation={evaluationsState[0]} />
                                    }
                                </Col>
                                <Col xs={12} md={6} lg={4}></Col>
                                <Col xs={12} md={6} lg={4}></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main