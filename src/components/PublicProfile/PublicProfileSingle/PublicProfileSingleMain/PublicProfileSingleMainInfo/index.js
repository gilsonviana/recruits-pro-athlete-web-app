// Dependencies
import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaGraduationCap, FaHome } from 'react-icons/fa'

// Assets
import './style.css'

const PublicProfileSingleMainInfo = () => {
    return (
        <div className="public-profile__single-main__info">
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Information</Card.Title>
                        <Card.Text><FaGraduationCap className="mr-1"/> Studied at <b>SchoolName</b></Card.Text>
                        <Card.Text><FaHome className="mr-1"/> Lives in <b>City</b>, <b>State</b></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PublicProfileSingleMainInfo