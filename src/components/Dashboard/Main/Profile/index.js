// Dependencies
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import ProfileHeader from './ProfileHeader'
import ProfileAside from './ProfileAside'
import ProfileMain from './ProfileMain'

// Assets
import './style.css'

const Profile = () => {
    const [previewImages, setPreviewImages] = useState({
        avatar: null,
        cover: null
    })

    const handlerPreviewImages = (e) => {
        const { target } = e
        const file = target.files[0] || null
        const reader = new FileReader()

        if (file) {
            reader.readAsDataURL(file)
            reader.onload = e => {                
                setPreviewImages({
                    ...previewImages,
                    [target.name]: e.target.result
                })
            }
        }
    }

    return (
        <div className="page__profile">
            <ProfileHeader images={previewImages}/>
            <Container fluid className="mt-4">
                <Row>
                    <Col lg={3}>
                        <ProfileAside />
                    </Col>
                    <Col lg={{span: 8, offset: 1}}>
                        <ProfileMain handlerPreviewImages={handlerPreviewImages}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile