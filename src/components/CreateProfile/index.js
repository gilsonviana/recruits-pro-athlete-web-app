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
import Toast from 'react-bootstrap/Toast'

// Redux
import { setProfileRequest, setProfileImagesRequest } from '../../store/profile/actions'
import { doLogout } from '../../store/auth/actions'

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

const CreateProfile = ({ history, token, setProfileRequest, setProfileImagesRequest, doLogout }) => {
    const [showToast, setShowToast] = useState({
        isVisible: false,
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [previewImages, setPreviewImages] = useState({
        avatar: '',
    })
    const [personalImages, setPersonalImages] = useState({
        avatar: '',
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
        country: "USA",
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

    const [sportsForm, setSportsForm] = useState({
        primary: {
            name: '',
            positions: ''
        },
        secondary: {
            name: '',
            positions: ''
        }
    })

    const [key, setKey] = useState("personal");

    // Navigate through tabs
    const handleChangeTabKey = (key = "") => {
        if (key) {
            setKey(key);
        }
    };

    const handlePersonalFormOnChange = (e) => {
        const { target } = e

        if (target.name === "avatar") {
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

    const handleSportsFormOnChange = (e, key = "") => {
        const { target } = e

        if (target.name === 'other') {
            setSportsForm({
                ...sportsForm,
                [key]: {
                    ...sportsForm[key],
                    name: target.value
                }
            })
            return
        }
        setSportsForm({
            ...sportsForm,
            [key]: {
                ...sportsForm[key],
                [target.name]: target.value
            }
        })
    }

    const handleSubmitForm = async e => {
        e.preventDefault();
        
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
            sports: {
                ...sportsForm
            },
            meta: {
                isCompleted: true
            }
        }

        if (_formValidation(profile)) {    
            try {
                setIsLoading(true)
                
                await setProfileRequest(token, profile)
                await setProfileImagesRequest(token, personalImages)
                
                setIsLoading(false)
                history.push('/dashboard')
                return
            } catch (e) {
                setIsLoading(false)
                setShowToast({
                    isVisible: true,
                    message: "Unable to update profile."
                })
            }
        }
    };

    const handleRemoveAvatar = () => {
        setPreviewImages({
            ...previewImages,
            avatar: ''
        })
    }

    const _formValidation = (form) => {
        const requiredFields = {
            personal: [{
                name: 'dob',
                label: 'Date of Birth'
            }],
            location: [{
                name: 'country',
                label: 'Country'
            }],
            education: [{
                name: 'skillLevel',
                label: 'Skill level'
            }],
            sports: [{
                name: 'name',
                label: 'Primary sport name'
            }, {
                name: 'positions',
                label: 'Primary sport positions'
            }]
        }
        const errorFields = []
        const ruleKeys = Object.keys(requiredFields)
        const formKeys = Object.keys(form)

        if (formKeys.length > 0) {
            ruleKeys.forEach(rule => {
                if (form.hasOwnProperty(rule) && rule === 'sports') {
                    requiredFields[rule].map(({ name: key, label }) => {
                        if (!form[rule]['primary'][key]) {
                            errorFields.push(label)
                            return
                        }
                    })
                    return
                }
                if (form.hasOwnProperty(rule)) {
                    requiredFields[rule].map(({ name: key, label }) => {
                        if (!form[rule][key]) {
                            errorFields.push(label)
                            return
                        }
                    })
                }
            })
        }

        if (errorFields.length > 0) {
            setShowToast({
                isVisible: true,
                message: errorFields.length > 1 ? `
                    The following fields are required: ${errorFields.join(', ')}.
                `: `
                    The following field is required: ${errorFields.join(', ')}.
                `
            })
            return false
        }

        return true
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
            <div className="fixed-top"> 
                <Toast onClose={() => setShowToast({isVisible: false, message: ''})} show={showToast.isVisible} delay={8000} autohide style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: `#eb5a46`,
                    color: `#eee`,
                    width: `100%`
                }}>
                    <Toast.Body>{showToast.message}</Toast.Body>
                </Toast>
            </div>
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
                                        doLogout={doLogout}
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
                                        handleOnChange={handleEducationFormOnChange} />
                                </Tab>
                                <Tab eventKey="sports" title="Sports">
                                    <CreateProfileSports 
                                        handleTabKey={handleChangeTabKey}
                                        handleSubmit={handleSubmitForm}
                                        handleOnChange={handleSportsFormOnChange} />
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
    doLogout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { setProfileRequest, setProfileImagesRequest, doLogout })(withRouter(CreateProfile));
