// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

// Assets
import './style.css'

// Components
import PublicProfileListingItem from './PublicProfileListingItem'

const PublicProfileListing = ({ athletes }) => {
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
                        {athletes.length > 1 ? 
                            <h5 className="mt-4"><b>{athletes.length}</b> Athletes found</h5> :
                            <h5 className="mt-4"><b>1</b> Athlete found</h5>
                        }
                        {
                            athletes.map(athlete => <PublicProfileListingItem key={athlete._id} athlete={athlete} />)
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}

PublicProfileListing.propTypes = {
    athletes: PropTypes.array.isRequired
}

export default PublicProfileListing