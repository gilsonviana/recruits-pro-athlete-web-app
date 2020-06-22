import * as React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import ReactPlayer from 'react-player'

const LastVideo = ({ video }) => {
    const videoDate = moment(video.createdAt).format('MMM Do, YYYY')

    return (
        <Card>
            <div className="d-flex justify-content-between pt-3 px-3" style={{background: 'rgba(0, 236, 0, .4)'}}>
                <Card.Title>Last video</Card.Title>
                <p>{(videoDate) && videoDate}</p>
            </div>
            <div className="d-xl-flex text-center" style={{height: `250px`}}>
                <ReactPlayer
                    url={video.url}
                    light={true}
                    width='100%'
                    height='100%'
                    />
            </div>
        </Card>
    )
}

LastVideo.propTypes = {
    video: PropTypes.object.isRequired
}

export default LastVideo