// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import VideoItemPlayer from '../../../../Dashboard/Main/Videos/VideosAll/VideoItemPlayer'

// Assets
import videoImg from '../../../../../assets/images/video-camera.png'

const PublicProfileSingleMainVideos = ({ videos }) => {
    if (videos.length <= 0) {
        return (
            <div className="public-profile__single__main__videos text-center">
                <img src={videoImg} style={{width: 'auto', height: `120px`, margin: 'auto'}} alt="no videos available"/>
                <h5 className="text-muted mt-4">No videos yet</h5>
            </div>
        )
    }

    return (
        <div className="public-profile__single__main__videos">
            <Container fluid>
                <Row>
                    {
                        videos.map((video, i) => 
                            <Col key={i} xl="6"><VideoItemPlayer videoUrl={video.url} title={video.title} /></Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

PublicProfileSingleMainVideos.propTypes = {
    videos: PropTypes.array.isRequired
}

export default PublicProfileSingleMainVideos