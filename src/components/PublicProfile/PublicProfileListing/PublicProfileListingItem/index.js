// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

// Assets
import avatarPlaceholder from '../../../../assets/images/user-avatar-placeholder.png'

const PublicProfileListingItem = ({ athlete }) => {
    return (
        <Link to={`/public/${athlete.user}`} className="d-block mb-3">
            <Card className="public-profile__listing__item text-dark" style={{fontSize: `.8rem`}}> 
                <Card.Body>
                    <div className="media">
                        <div className="rounded-circle border overflow-hidden mr-3" style={{width: `65px`, height: `65px`}}>
                            {athlete.personal.avatarUrl ?
                                <img src={athlete.personal.avatarUrl} alt={athlete.personal.fullName} style={{height: '100%', width: 'auto'}}/>:
                                <img src={avatarPlaceholder} alt={athlete.personal.fullName} style={{height: '100%', width: 'auto'}} />
                            }
                        </div>
                        <div className="media-body">
                            <h6 className="mt-0">{athlete.personal.fullName}</h6>
                            <p className="m-0 text-muted">{athlete.education.schoolName || ""}</p>
                            <p className="m-0 text-muted">{athlete.location.city || ""}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

PublicProfileListingItem.propTypes = {
    athlete: PropTypes.object.isRequired
}

export default PublicProfileListingItem