// Dependencies
import React from 'react'
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

const PublicProfileSingleMainInfo = () => {
    return (
        <div className="public-profile__single-main__info">
            <Tab.Container defaultActiveKey="#information">
                <Row>
                    <Col md={3}>
                        <ListGroup className="public-profile__single-main__info__nav shadow-sm">
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
                        <Tab.Content className="public-profile__single-main__info__content">
                            <Tab.Pane eventKey="#information">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Information</Card.Title>
                                        <Card.Text><FaRegCalendarAlt className="mr-1"/> Born on {moment(new Date()).format('MMMM d YYYY')}</Card.Text>
                                        <Card.Text><MdEmail className="mr-1"/> vianawebdev@gmail.com</Card.Text>
                                        <Card.Text><FaMobileAlt className="mr-1"/> 407-706-2254</Card.Text>
                                        <Card.Text><FaHome className="mr-1"/> Lives in <b>City</b>, <b>State</b></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#education">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Education</Card.Title>
                                        <Card.Text><FaGraduationCap className="mr-1"/> Studied at <b>SchoolName</b></Card.Text>
                                        <Card.Text><FaUserGraduate className="mr-1"/> Graduated on <b>2009</b></Card.Text>
                                        <Card.Text><MdGrade className="mr-1"/> GPA <b>4.0</b></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#references">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>References</Card.Title>
                                        <Card.Text><FaUserAlt className="mr-1" /> Tim Sams | <MdEmail className="mr-1" /> <span className="text-info">timsams@gmail.com</span></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> Tim Sams | <MdEmail className="mr-1" /> <span className="text-info">timsams@gmail.com</span></Card.Text>
                                        <hr />
                                        <Card.Text><FaUserAlt className="mr-1" /> Tim Sams | <MdEmail className="mr-1" /> <span className="text-info">timsams@gmail.com</span></Card.Text>
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
                                        <h4 className="text-uppercase font-weight-bold">soccer</h4>
                                        <FaCaretRight className="mr-1"/><span>MA | SS | CF</span>
                                        <hr />
                                        <div className="text-muted">
                                            <Card.Text>Other sport</Card.Text>
                                            <h6>Baseball</h6>
                                            <FaCaretRight className="mr-1"/><span>Pitcher</span>
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

export default PublicProfileSingleMainInfo