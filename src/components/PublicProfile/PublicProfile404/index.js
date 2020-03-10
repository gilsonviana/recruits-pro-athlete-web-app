// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const PublicProfile404 = () => {
    return (
        <div className="public-profile__listing">
            <div className="public-profile__listing__wrapper">
                <Container>
                    <div className="public-profile__listing__banner">
                        <Card className="py-4">
                            <Card.Body>
                                <Card.Title>No athletes found.</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PublicProfile404