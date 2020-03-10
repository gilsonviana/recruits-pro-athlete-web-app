// Dependencies
import React from 'react'

// Assets
import clipboardImg from '../../../../../assets/images/clipboards.png'

const PublicProfileSingleMainEvents = () => {
    return (
        <div className="public-profile__single__main__events text-center">
            <img src={clipboardImg} style={{width: 'auto', height: `120px`, margin: 'auto'}} alt="no videos available"/>
            <h5 className="text-muted mt-4">No events yets</h5>
        </div>
    )
}

export default PublicProfileSingleMainEvents