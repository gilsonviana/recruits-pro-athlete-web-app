// Dependencies
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Loader from 'react-loader-spinner'

// Redux
import { setProfileRequest } from '../../store/profile/actions'

// Components
import CreateProfileHeader from "./CreateProfileHeader";
import CreateProfilePersonal from "./CreateProfilePersonal";
import CreateProfileLocation from "./CreateProfileLocation";
import CreateProfileEducation from "./CreateProfileEducation";

// Assets
import "./style.css";
import userAvatarPlaceholder from "../../assets/images/user-avatar-placeholder.png";

const CreateProfile = ({ history, token, setProfileRequest }) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [previewAvatar, setPreviewAvatar] = useState('')
    const [personalForm, setPersonalForm] = useState({
        avatarUrl: "",
        dob: "",
        phone: {
            number: "",
            mobile: false
        },
        height: {
            feet: "",
            inches: ""
        },
        weight: ""
    });

    const [locationForm, setLocationForm] = useState({
        country: "",
        zipcode: "",
        state: "",
        city: ""
    });

    const [educationForm, setEducationForm] = useState({
        skillLevel: "",
        schoolName: "",
        graduated: false,
        graduationYear: "",
        gpa: ""
    });

    const [key, setKey] = useState("personal");

    // Navigate through tabs
    const handleChangeTabKey = (key = "") => {
        if (key) {
            setKey(key);
        }
    };

    const handlePersonalFormOnChange = (e) => {
        const { target } = e

        if (target.name === "avatarUrl") {
            const file = target.files[0] || null
            const reader = new FileReader()
            if (file) {
                reader.readAsDataURL(file)
                reader.onload = e => {
                    setPreviewAvatar(e.target.result)
                    setPersonalForm({
                        ...personalForm,
                        avatarUrl: e.target.result
                    })
                }
                return
            }
            return
        }

        if (target.name === "number") {
            setPersonalForm({
                ...personalForm,
                phone: {
                    ...personalForm.phone,
                    [target.name]: target.value
                }
            })
            return
        }

        if (target.name === "mobile") {
            setPersonalForm({
                ...personalForm,
                phone: {
                    ...personalForm.phone,
                    [target.name]: target.checked
                }
            })
            return
        }

        if (target.name === "feet" || target.name === "inches") {
            setPersonalForm({
                ...personalForm,
                height: {
                    ...personalForm.height,
                    [target.name]: target.value
                }
            })
            return
        }

        setPersonalForm({
            ...personalForm,
            [target.name]: target.value
        })
    }

    const handleLocationFormOnChange = (e) => {
        const { target } = e

        setLocationForm({
            ...locationForm,
            [target.name]: target.value
        })
    }

    const handleEducationFormOnChange = (e) => {
        const { target } = e

        if (target.name === 'graduated') {
            setEducationForm({
                ...educationForm,
                [target.name]: target.checked
            })
            return
        }

        if (target.name === 'graduationYear') {
            setEducationForm({
                ...educationForm,
                [target.name]: target.value.slice(0, 4)
            })
            return
        }

        setEducationForm({
            ...educationForm,
            [target.name]: target.value
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        setIsLoading(true)
        const profile = {
            personal: {
                ...personalForm
            },
            location: {
                ...locationForm
            },
            education: {
                ...educationForm
            },
            meta: {
                isCompleted: true
            }
        }

        setProfileRequest(token, profile)

        // TODO remove for production
        setTimeout(() => {
            setIsLoading(false)
            history.push('/dashboard')
        }, 1500)
    };

    const handleRemoveAvatar = () => {
        setPreviewAvatar('')
        setPersonalForm({
            ...personalForm,
            avatarUrl: ''
        })
    }

    return (
        <div className="page__create-profile">
            {(isLoading) && (
                <div className="page__overlay__loading">
                <Loader 
                    type="Oval"
                    color="#00FF00"
                    height={100}
                    width={100}
                />
                </div>
            )}
            <CreateProfileHeader />
            <Container className="page__create-profile__wrapper">
                <Row>
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <Card className="px-4 shadow-lg">
                            <Card.Title className="text-center my-4 d-none d-md-block">Create Profile</Card.Title>
                            {
                                (previewAvatar) ?
                                    <div className="create-profile__personal__img d-flex justify-content-center my-4">
                                        <Image style={{ width: '122px', height: '122px' }} className="img-fluid rounded-circle" src={previewAvatar} />
                                        <div
                                            className="create-profile__personal__img--hover rounded-circle"
                                            onClick={handleRemoveAvatar}>
                                            <p className="font-weight-bold">Remove</p>
                                        </div>
                                    </div> :
                                    <div className="create-profile__personal__img d-flex justify-content-center my-4">
                                        <div className="create-profile__personal__img__wrapper rounded-circle bg-light overflow-hidden">
                                            <Image className="img-fluid" src={userAvatarPlaceholder} />
                                        </div>
                                    </div>
                            }
                            <p className="lead bg-light p-2 rounded rounded-sm">
                                Use your best knowledge to complete the form.
                            </p>
                            <Tabs
                                id="controlled-create-profile-nav"
                                activeKey={key}
                                onSelect={k => setKey(k)}
                                className="create-profile-nav mx-0"
                            >
                                <Tab eventKey="personal" title="Personal">
                                    <CreateProfilePersonal
                                        handleTabKey={handleChangeTabKey}
                                        handleOnChange={handlePersonalFormOnChange} />
                                </Tab>
                                <Tab eventKey="location" title="Location">
                                    <CreateProfileLocation
                                        handleTabKey={handleChangeTabKey}
                                        handleOnChange={handleLocationFormOnChange} />
                                </Tab>
                                <Tab eventKey="education" title="Education">
                                    <CreateProfileEducation
                                        handleTabKey={handleChangeTabKey}
                                        handleSubmit={handleSubmitForm}
                                        handleOnChange={handleEducationFormOnChange} />
                                </Tab>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

CreateProfile.propTypes = {
    token: PropTypes.string.isRequired,
    setProfileRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token  
})

export default connect(mapStateToProps, { setProfileRequest })(withRouter(CreateProfile));
