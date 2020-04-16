// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'

// Components
import VideosSidebar from './VideosSidebar'
import VideosAll from './VideosAll'
import VideosAdd from './VideosAdd'
import MarketingBanner from "../MarketingBanner";

// Redux
import { getVideos, addVideo, deleteVideo } from '../../../../store/videos/actions'

const Videos = ({ token, subscriptionStatus, getVideos, addVideo, deleteVideo }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState({
        isVisible: false, 
        message: '', 
        backgroundColor: ''
    })

    useEffect(() => {
        getVideos(token)
    }, [getVideos, subscriptionStatus])

    const handleAddVideo = async (videoDetails) => {
        try {
            setIsLoading(true)
            const res = await addVideo(token, videoDetails)
            if (res) {
                setIsLoading(false)
                setShowToast({
                    isVisible: true,
                    message: 'Video saved successfully.',
                    backgroundColor: '#28a745'
                })
            }
        } catch (e) {
            setIsLoading(false)
            setShowToast({
                isVisible: true,
                message: 'Unable to save your video at this time. Please, try again later.',
                backgroundColor: '#eb5a46'
            })
        }
    }

    const handleDeleteVideo = (id) => {
        if (!id) return false
        deleteVideo(token, id)
    }

    return (
        <div className="page__videos">
            {
                subscriptionStatus !== 'ACTIVE' && 
                    <MarketingBanner 
                        title="Do more with Athletes Pro" 
                        text={`
                            Boost your profile with unlimited video uploads, social media integration, 
                            contact references and more by subscribing to Athletes Pro.
                        `} />
            }
            <div className="fixed-top"> 
                <Toast onClose={() => setShowToast({isVisible: false, message: '', backgroundColor: ''})} show={showToast.isVisible} delay={4000} autohide style={{
                    position: 'absolute',
                    left: `50%`,
                    transform: `translateX(${-50}%)`,
                    backgroundColor: showToast.backgroundColor,
                    color: `#eee`,
                    width: `100%`
                }}>
                    <Toast.Body>{showToast.message}</Toast.Body>
                </Toast>
            </div>
            <div className="page__videos__header px-4 px-lg-2">
                <h5 className="font-weight-bold">Display your best performance videos</h5>
                <p className="lead">
                    Easily add and manage your YouTube videos
                </p>
            </div>
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <VideosSidebar />
                    </Col>
                    <Col lg={{span: 8, offset: 1}}>
                        <Switch>
                            <Route path="/dashboard/videos" exact>
                                <VideosAll handleDelete={handleDeleteVideo}/>
                            </Route>
                            <Route path="/dashboard/videos/add" exact>
                                <VideosAdd addVideo={handleAddVideo} loading={isLoading}/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Videos.propTypes = {
    token: PropTypes.string.isRequired,
    subscriptionStatus: PropTypes.string.isRequired,
    getVideos: PropTypes.func.isRequired,
    addVideo: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    token: state.auth.token,
    subscriptionStatus: state.profile.subscription.status,
    videos: state.videos
})
export default connect(mapStateToProps, { getVideos, addVideo, deleteVideo })(Videos)