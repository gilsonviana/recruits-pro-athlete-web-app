// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '../../../styled-components'

// Assets
import './style.css'

// Components
import PublicProfileListingItem from './PublicProfileListingItem'

const PublicProfileListing = ({ athletes, token, history }) => {
    const handleOnClick = (action = 'subscribe') => {
        if (action === 'subscribe') {
            return history.push('/dashboard/profile/subscribe')
        }

        history.push('/signup')
    }

    return (
        <div className="public-profile__listing">
            <div className="public-profile__listing__wrapper">
                <Container>
                    <div className="public-profile__listing__banner">
                        <Card className="py-4">
                            <Card.Body>
                                <Card.Title className="font-weight-bold">Take your game to a next level</Card.Title>
                                {
                                    token ? 
                                    <>
                                        <Card.Title className="lead">Subscribe for <b>Athletes Pro</b> today</Card.Title>
                                        <Button className="public-profile__listing__banner__btn" onClick={handleOnClick}>Subscribe now</Button>
                                    </> :
                                    <>
                                        <Card.Title className="lead">Sign up for <b>Athletes Pro</b> today</Card.Title>
                                        <Button className="public-profile__listing__banner__btn" onClick={handleOnClick}>Sign up now</Button>
                                    </>
                                }
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
    athletes: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default withRouter(connect(mapStateToProps)(PublicProfileListing))