// Dependencies
import React from 'react'

// Assets
import videoImg from '../../../../../assets/images/video-camera.png'

const PublicProfileSingleMainVideos = () => {
    return (
        <div className="public-profile__single__main__videos text-center">
            <img src={videoImg} style={{width: 'auto', height: `120px`, margin: 'auto'}} alt="no videos available"/>
            <h5 className="text-muted mt-4">No videos yets</h5>
        </div>
    )
}

export default PublicProfileSingleMainVideos