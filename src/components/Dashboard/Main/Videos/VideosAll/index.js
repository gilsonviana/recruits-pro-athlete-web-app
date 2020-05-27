// Dependencies
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import VideoItemPlayer from './VideoItemPlayer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VideosAll = ({ videos, handleDelete }) => {
    const [allVideos, setAllVideos] = useState([])
    
    useEffect(() => {
        setAllVideos(videos)
    }, [videos])

    return (
        <div className="page__videos__videos-all">
            <h5>YouTube</h5>
            <hr />
            <Container fluid>
                <Row>
                    {
                        allVideos.length > 0 ? allVideos.map((video, i) => 
                            <Col md={6} xl={4} key={i}>
                                <VideoItemPlayer deleteVideo={handleDelete} videoUrl={video.url} title={video.title} id={video._id}/>
                            </Col>  
                        ) : <p className="lead text-muted">No videos yet</p>
                    }
                </Row>
            </Container>
        </div>
    )
}

VideosAll.propTypes = {
    videos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default VideosAll