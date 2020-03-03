// Dependencies
import React from 'react'
import Card from 'react-bootstrap/Card'

// Assets
import avatarPlaceholder from '../../../../assets/images/user-avatar-placeholder.png'

const PublicProfileListingItem = () => {
    return (
        <Card className="public-profile__listing__item" style={{fontSize: `.8rem`}}> 
            <Card.Body>
                <div className="media">
                    <div className="rounded-circle border overflow-hidden mr-3" style={{width: `65px`, height: `65px`}}>
                        <img src={avatarPlaceholder} alt="..." className="img-fluid"/>
                    </div>
                    <div className="media-body">
                        <h6 className="mt-0">Media heading</h6>
                        <span className="text-muted">Cras sit amet nibh libero</span><br />
                        <span className="text-muted">Cras sit amet nibh libero</span><br />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PublicProfileListingItem