import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Button } from '../../styled-components'

import "./pricing-page-popup.css"

const PricingPagePopup = ({ handleClose, handleSignupFree, handleSignupPro }) => {
    return (
        <div className="pricing-page-popup px-3" onClick={handleClose}>
            <Card className="pricing-page-popup__content">
                <Card.Body className="p-4">
                    <Card.Title>
                        <h1>Make the right decision.</h1>
                    </Card.Title>

                </Card.Body>
                <Card.Footer className="px-4 bg-light border-0 d-flex flex-row justify-content-between">
                    <Button onClick={handleSignupPro}>Select PRO plan</Button>
                    <Button link className="text-dark" onClick={handleSignupFree}>Continue with free plan</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

PricingPagePopup.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleSignupFree: PropTypes.func.isRequired,
    handleSignupPro: PropTypes.func.isRequired
}

export default PricingPagePopup