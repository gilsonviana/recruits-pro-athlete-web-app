// Dependencies
import React from 'react'
import Card from 'react-bootstrap/Card'

// Assets
import './style.css'
import avatarPlaceholder from '../../../../../../assets/images/user-avatar-placeholder.png'

const PublicProfileSingleMainEvaluationsItem = () => {
    return (
        <div className="public-profile__single-main__evaluations__item">
            <Card>
                <Card.Body>
                    <div className="public-profile__evaluations__card__header d-flex flex-row">
                        <div className="public-profile__evaluations__card__header__img mr-2 rounded-circle overflow-hidden border">
                            <img src={avatarPlaceholder}/>
                        </div>
                        <div>
                            <span><b>John Doe</b>, location <b>2401 Lakeshore, Saint Cloud, FL</b></span><br />
                            <span className="text-muted">February 28 at 10:00 AM</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PublicProfileSingleMainEvaluationsItem