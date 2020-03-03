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
import Loader from 'react-loader-spinner';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// Redux
import { setProfileRequest, setProfileImagesRequest } from '../../store/profile/actions'

// Components
import CreateProfileHeader from "./CreateProfileHeader";
import CreateProfilePersonal from "./CreateProfilePersonal";
import CreateProfileLocation from "./CreateProfileLocation";
import CreateProfileEducation from "./CreateProfileEducation";
import CreateProfileSports from "./CreateProfileSports"

// Assets
import "./style.css";
import brand from '../../assets/images/logo-dashboard.png'
import userAvatarPlaceholder from "../../assets/images/user-avatar-placeholder.png";

const CreateProfile = ({ history, token, setProfileRequest, setProfileImagesRequest }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [previewImages, setPreviewImages] = useState({
        avatar: '',
        cover: ''
    })
    const [personalImages, setPersonalImages] = useState({
        avatar: '',
        cover: ''
    })
    const [personalForm, setPersonalForm] = useState({
        dob: "",
        phone: {
            number: "",
            mobile: false
        },
        height: {
            feet: "",
            inches: ""
        },
        weight: "",
        references: {
            first: {
                name: '',
                email: ''
            },
            second: {
                name: '',
                email: ''
            },
            third: {
                name: '',
                email: ''
            }
        }
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

        if (target.name === "avatar" || target.name === 'cover') {
            const file = target.files[0] || null
            const reader = new FileReader()
            if (file) {
                setPersonalImages({
                    ...personalImages,
                    [target.name]: file
                })
                reader.readAsDataURL(file)
                reader.onload = e => {
                    setPreviewImages({
                        ...previewImages,
                        [target.name]: e.target.result
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

        if (target.name === 'first' || target.name === 'second' || target.name === 'third') {
            switch(target.type) {
                case 'text':
                    setPersonalForm({
                        ...personalForm,
                        references: {
                            ...personalForm.references,
                            [target.name]: {
                                ...personalForm.references[target.name],
                                name: target.value
                            }
                        }
                    })
                    return
                case 'email':
                    setPersonalForm({
                        ...personalForm,
                        references: {
                            ...personalForm.references,
                            [target.name]: {
                                ...personalForm.references[target.name],
                                email: target.value
                            }
                        }
                    })
                    return
                default:
                    return
            }
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

    const handleSubmitForm = async e => {
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
        
        try {
            const res = await setProfileRequest(token, profile)

            await setProfileImagesRequest(token, personalImages)
            
            if (!res) {
                setIsLoading(true)
                return
            }

            // TODO remove for production
            setTimeout(() => {
                setIsLoading(false)
                history.push('/dashboard')
            }, 1500)
        } catch (e) {
            setIsLoading(false)
            console.log("Error: Could not update profile.")
        }

    };

    const handleRemoveAvatar = () => {
        setPreviewImages({
            ...previewImages,
            avatar: ''
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
            <Navbar bg="dark" expand="md" variant="dark" className="public-profile-navbar" style={{minHeight: `4rem`}}>
                <Navbar.Brand href="#home">
                    <div className="app__header__top__bar__brand">
                        <img src={brand} alt="Recruits Pro Logo"/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="mt-4 mt-md-0">
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                        <Nav.Link variant="success" href="/signup" className="text-white d-md-none">Sign up</Nav.Link>
                        <Nav.Link as={Button} variant="success" href="/signup" className="text-white d-none d-md-inline-block">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CreateProfileHeader />
            <Container className="page__create-profile__wrapper">
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
                        <Card className="px-4 shadow-lg">
                            <Card.Title className="text-center my-4 d-none d-md-block">Create Profile</Card.Title>
                            {
                                (previewImages.avatar) ?
                                    <div className="create-profile__personal__img d-flex justify-content-center my-4">
                                        <Image style={{ width: '122px', height: '122px' }} className="img-fluid rounded-circle" src={previewImages.avatar} />
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
                            <p className="lead">
                                Your profile will be seen by evaluators, coaches and scouts.
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
                                <Tab eventKey="sports" title="Sports">
                                    <CreateProfileSports 
                                        handleTabKey={handleChangeTabKey}/>
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
    setProfileImagesRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { setProfileRequest, setProfileImagesRequest })(withRouter(CreateProfile));
