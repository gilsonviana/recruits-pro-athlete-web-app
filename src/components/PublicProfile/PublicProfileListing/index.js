// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Assets
import './style.css'

// Components
import PublicProfileListingItem from './PublicProfileListingItem'

const PublicProfileListing = () => {
    return (
        <div className="public-profile__listing">
            <div className="public-profile__listing__wrapper">
                <Container>
                    <div className="public-profile__listing__banner">
                        <Card className="py-4">
                            <Card.Body>
                                <Card.Title>Take your game to a next level</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="public-profile__listing__content">
                        <h5 className="mt-4"><b>2</b> Athletes found</h5>
                        <PublicProfileListingItem />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PublicProfileListing