// Dependencies
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
                            <p className="m-0"><b>John Doe</b>, <FaMapMarkerAlt /> <b>2401 Lakeshore, Saint Cloud, FL</b></p>
                            <span className="text-muted">February 28 at 10:00 AM</span>
                        </div>
                    </div>
                    <Button variant="light" className="mt-4 text-success" style={{marginLeft: `3rem`}}>Metrics</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PublicProfileSingleMainEvaluationsItem