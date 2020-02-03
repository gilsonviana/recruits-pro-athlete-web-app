// Dependencies
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

// Components
import CreateProfileHeader from './CreateProfileHeader'
import CreateProfilePersonal from './CreateProfilePersonal'
import CreateProfileLocation from './CreateProfileLocation'
import CreateProfileEducation from './CreateProfileEducation'

// Assets
import './style.css'
import userAvatarPlaceholder from "../../assets/images/user-avatar-placeholder.png";

const CreateProfile = () => {
    const [key, setKey] = useState('personal')

    // Navigate through tabs
    const handleChangeTabKey = (key = '') => {
        if (key) {
            setKey(key)
        }
    }

    const handleSubmitForm = (e) => {
        // TODO call redux action
        e.preventDefault()
        console.log("handleSubmit callled")
    }

    return (
        <div className="page__create-profile">
            <CreateProfileHeader />
            <Container className="page__create-profile__wrapper">
                <Row>
                    <Col xs={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                        <Card className="px-4 shadow-lg">
                            <div className="create-profile__personal__img d-flex justify-content-center my-4">
                                <div className="create-profile__personal__img__wrapper rounded-circle w-25 bg-light overflow-hidden">
                                    <Image
                                        className="img-fluid"
                                        src={userAvatarPlaceholder}
                                    />
                                </div>
                            </div>
                            <p className="lead bg-light p-2 rounded rounded-sm">
                                Let's finish setting up your profile. Fill all the fields as your best knowledge.
                            </p>
                            <Tabs id="controlled-create-profile-nav" activeKey={key} onSelect={k => setKey(k)} className="create-profile-nav mx-0">
                                <Tab eventKey="personal" title="Personal">
                                    <CreateProfilePersonal handleTabKey={handleChangeTabKey}/>
                                </Tab>
                                <Tab eventKey="location" title="Location">
                                    <CreateProfileLocation handleTabKey={handleChangeTabKey}/>
                                </Tab>
                                <Tab eventKey="education" title="Education">
                                    <CreateProfileEducation handleTabKey={handleChangeTabKey} handleSubmit={handleSubmitForm}/>
                                </Tab>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateProfile