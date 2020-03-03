// Dependencies
import React from 'react'

// Assets
import './style.css'

// Components
import PublicProfileSingleMainSocial from '../PublicProfileSingleMain/PublicProfileSingleMainSocial'

const PublicProfileSingleHeader = () => {
    return (
        <header className="page__public-profile-single__header">
            <div className="page__public-profile-single__header__bkg" style={{background: `url(https://recruits-pro-athletes-avatar-cover.s3.us-east-2.amazonaws.com/1582904910224tevarak-phanduang-eOvv4N6yNmk-unsplash.jpg) center center / cover no-repeat`}}>
                <PublicProfileSingleMainSocial />
            </div>
        </header>
    )
}

export default PublicProfileSingleHeader