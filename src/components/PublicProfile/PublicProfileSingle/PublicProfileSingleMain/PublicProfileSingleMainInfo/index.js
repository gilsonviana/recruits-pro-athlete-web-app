// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import { FaUserAlt, FaGraduationCap, FaHome, FaRegCalendarAlt, FaMobileAlt, FaCaretRight, FaUserGraduate } from 'react-icons/fa'
import { MdEmail, MdGrade } from 'react-icons/md'
import moment from 'moment'

// Assets
import './style.css'

const PublicProfileSingleMainInfo = ({ personal, location, sports, education }) => {
    const dob = personal.dob ? new Date(personal.dob) : ''
    const city = location.hasOwnProperty('city') ? location.city : ''
    const state = location.hasOwnProperty('state') ? location.state : ''
    const primarySport = sports.primary.hasOwnProperty('name') ? sports.primary.name : ''
    const primaryPositions = sports.primary.positions.join(" | ")
    const secondarySport = sports.secondary.hasOwnProperty('name') ? sports.secondary.name : ''
    const secondaryPositions = sports.secondary.positions.join(" | ")

    return (
        <div className="public-profile__single-main__info">
            <Tab.Container defaultActiveKey="#information">
                <Row>
                    <Col md={3}>
                        <ListGroup className="public-profile__single-main__info__nav shadow-sm mb-4 mb-md-0">
                            <ListGroup.Item action href="#information">
                                Information
                            </ListGroup.Item>
                            <ListGroup.Item action href="#education">
                                Education
                            </ListGroup.Item>
                            <ListGroup.Item action href="#references">
                                References
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={{span: 4, offset: 0}}>
                        <Tab.Content className="public-profile__single-main__info__content mb-4 mb-md-0">
                            <Tab.Pane eventKey="#information">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Information</Card.Title>
                                        {dob && <Card.Text><FaRegCalendarAlt className="mr-1"/> Born on {moment(dob).format('MMMM d YYYY')}</Card.Text>}
                                        <Card.Text><MdEmail className="mr-1"/> {personal.email || ''}</Card.Text>
                                        <Card.Text><FaMobileAlt className="mr-1"/> {personal.hasOwnProperty('phone') ? personal.phone.number : ''}</Card.Text>
                                        <Card.Text><FaHome className="mr-1"/> Lives in <b>{city}</b>, <b>{state}</b></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#education">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Education</Card.Title>
                                        {education.schoolName && <Card.Text><FaGraduationCap className="mr-1"/> Studied at <b>{education.schoolName}</b></Card.Text>}
                                        {education.graduated && <Card.Text><FaUserGraduate className="mr-1"/> Graduated on <b>{education.graduationYear}</b></Card.Text>}
                                        {education.gpa && <Card.Text><MdGrade className="mr-1"/> GPA <b>{education.gpa}</b></Card.Text>}
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#references">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>References</Card.Title>
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.first.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.first.email}`} alt="send email"><span className="text-info">{personal.references.first.email || ''}</span></a></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.second.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.second.email}`} alt="send email"><span className="text-info">{personal.references.second.email || ''}</span></a></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.third.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.third.email}`} alt="send email"><span className="text-info">{personal.references.third.email || ''}</span></a></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col md={{span: 4, offset: 0}}>
                        <Tab.Content className="public-profile__single-main__info__content">
                            <Tab.Pane eventKey="#information">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Sports</Card.Title>
                                        <h4 className="text-uppercase font-weight-bold">{primarySport}</h4>
                                        <FaCaretRight className="mr-1"/><span>{primaryPositions}</span>
                                        <hr />
                                        <div className="text-muted">
                                            <Card.Text>Other sport</Card.Text>
                                            <h6>{secondarySport}</h6>
                                            <FaCaretRight className="mr-1"/><span>{secondaryPositions}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

PublicProfileSingleMainInfo.propTypes = {
    personal: PropTypes.object,
    location: PropTypes.object,
    sports: PropTypes.object,
    education: PropTypes.object
}  

export default PublicProfileSingleMainInfo