// Dependencies
import React from 'react'

// Assets
import './style.css'

// Components
import PublicProfileSingleMainSocial from '../PublicProfileSingleMain/PublicProfileSingleMainSocial'

const PublicProfileSingleHeader = () => {
    return (
        <header className="page__public-profile-single__header">
            <div className="page__public-profile-single__header__bkg" style={{background: `url(https://recruits-pro-athletes-avatar-cover.s3.us-east-2.amazonaws.com/15825928136911578421657258D24B5D78-4119-44C7-9AC1-75B846A4BADB.jpg) center center / cover no-repeat`}}>
                <PublicProfileSingleMainSocial />
            </div>
        </header>
    )
}

export default PublicProfileSingleHeader