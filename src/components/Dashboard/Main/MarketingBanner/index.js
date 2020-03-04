// Dependencies
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from '../../../../styled-components'
import Alert from 'react-bootstrap/Alert'

// Assets
import './style.css'
import bg from '../../../../assets/images/dots.png'

const MarketingBanner = ({ history }) => {
    const [showAlert, setShowAlert] = useState(true)

    const handleSubscribe = () => {
        history.push('/dashboard/profile/subscribe')
    }

    if (showAlert) {
        return (
            <div className="banner__marketing">
                <Alert className="px-3 pr-md-4" onClose={() => setShowAlert(false)} dismissible style={{background: `url(${bg}) right -17vw / 39% no-repeat`}}>
                    <Container fluid>
                        <div className="banner__marketing__content">
                            <Row>
                                <Col xs={12} md={7}>
                                    <h4>Do more with Athletes Pro</h4>
                                    <p className="lead">
                                        Boost your profile with unlimited video upload, social media integration, 
                                        contact references and more by subscribing to <b>Athletes Pro</b>.
                                    </p>
                                </Col>
                                <Col xs={12} md={{span: 4, offset: 1}} className="d-flex align-items-center">
                                    <Button onClick={handleSubscribe}>Subscribe</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Alert>
            </div>
        )
    }

    return (
        <></>
    )
}

export default withRouter(MarketingBanner)