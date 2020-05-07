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
import lock from '../../../../../assets/images/lock.png'

const PublicProfileSingleMainInfo = ({ personal, location, sports, education, isSubscriber }) => {
    const dob = personal.dob ? new Date(personal.dob) : ''
    const city = location.hasOwnProperty('city') ? location.city : ''
    const state = location.hasOwnProperty('state') ? location.state : ''
    const primarySport = sports.primary.hasOwnProperty('name') ? sports.primary.name : ''
    const primaryPositions = sports.primary.positions.join(" | ")
    const secondarySport = sports.secondary.hasOwnProperty('name') ? sports.secondary.name : ''
    const secondaryPositions = sports.secondary.positions.join(" | ")

    const ICON_SIZE = '1rem'
    

    return (
        <div className="public-profile__single-main__info">
            <Tab.Container defaultActiveKey="#information">
                <Row>
                    <Col lg={3} className="mb-4 mb-lg-0">
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
                    <Col lg={{span: 4, offset: 0}} className="mb-4 mb-lg-0">
                        <Tab.Content className="public-profile__single-main__info__content mb-4 mb-md-0">
                            <Tab.Pane eventKey="#information">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Information</Card.Title>
                                        {dob && <Card.Text className="d-flex align-items-center"><FaRegCalendarAlt size={ICON_SIZE} className="mr-2"/> Born on {moment(dob).format('MMMM d YYYY')}</Card.Text>}
                                        {isSubscriber && <Card.Text className="d-flex align-items-center"><FaMobileAlt size={ICON_SIZE} className="mr-2"/> {personal.hasOwnProperty('phone') ? personal.phone.number : ''}</Card.Text>}
                                        {/* {isSubscriber && <Card.Text className="d-flex align-items-center"><MdEmail size={ICON_SIZE} className="mr-2"/> <a alt={`${personal.fullName} email`} href={`mailto: ${personal.email}`}>{personal.email || ''}</a></Card.Text>} */}
                                        <Card.Text className="d-flex align-items-center"><FaHome size={ICON_SIZE} className="mr-2"/> Lives in&nbsp;<b>{city}</b>&nbsp;<b>{state}</b></Card.Text>
                                        { (personal.height.hasOwnProperty('feet')) && (
                                            <>
                                                <hr />
                                                <div className="d-flex"><h6 className="mr-2 font-weight-bold">H</h6>Height&nbsp;<b>{personal.height.feet}'{personal.height.inches}''</b></div>
                                            </>
                                        )}
                                        { (personal.weight) && <div className="d-flex"><h6 className="mr-1 font-weight-bold">W</h6>Weight&nbsp;<b>{personal.weight} lb</b></div>}
                                        { (education.skillLevel) && (
                                            <>
                                                <hr />
                                                <div className="d-flex"><h6 className="mr-2 font-weight-bold">S</h6>Skill level&nbsp;<b>{education.skillLevel}</b></div>
                                            </>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#education">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Education</Card.Title>
                                        <Card.Text><FaGraduationCap className="mr-1"/> School <b>{education.schoolName}</b></Card.Text>
                                        {education.graduated ? 
                                            <Card.Text><FaUserGraduate className="mr-1"/> Graduated on <b>{education.graduationYear}</b></Card.Text> :
                                            <Card.Text><FaUserGraduate className="mr-1"/> Graduation year <b>{education.graduationYear}</b></Card.Text>
                                        }
                                        <Card.Text><MdGrade className="mr-1"/> GPA <b>{education.gpa}</b></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#references">
                               {!isSubscriber && 
                                <div className="public-profile__single-main__info__content__blocked">
                                    <p className="m-0 mb-2 lead text-center">
                                        Content available for <b>Athletes Pro</b> only.
                                    </p>
                                    <img src={lock} alt="content blocked" className="img-fluid"/>
                                </div>
                               }
                               {!isSubscriber ?
                                <Card style={{filter: `blur(.2rem)`}}>
                                    <Card.Body>
                                        <Card.Title>References</Card.Title>
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.first.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.first.email}`} alt="send email"><span className="text-info">{personal.references.first.email || ''}</span></a></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.second.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.second.email}`} alt="send email"><span className="text-info">{personal.references.second.email || ''}</span></a></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> {personal.references.third.name || ''} | <MdEmail className="mr-1" /> <a href={`mailto:${personal.references.third.email}`} alt="send email"><span className="text-info">{personal.references.third.email || ''}</span></a></Card.Text>
                                    </Card.Body>
                                </Card>
                                :
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
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col lg={{span: 4, offset: 0}}>
                        <Tab.Content className="public-profile__single-main__info__content">
                            <Tab.Pane eventKey="#information">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Sports</Card.Title>
                                        <b>Primary</b>
                                        <h5 className="text-uppercase font-weight-bold">{primarySport}</h5>
                                        <FaCaretRight className="mr-1"/><span>{primaryPositions}</span>
                                        {
                                            secondarySport && 
                                            <>
                                                <hr />
                                                <b>Secondary</b>
                                                <h5 className="text-uppercase font-weight-bold">{secondarySport}</h5>
                                                <FaCaretRight className="mr-1"/><span>{secondaryPositions}</span>
                                            </>
                                        }
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
    education: PropTypes.object,
    isSubscriber: PropTypes.bool
}  

export default PublicProfileSingleMainInfo