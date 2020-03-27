// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Assets
import './style.css'

// Components
import PublicProfileSingleMainSocial from '../PublicProfileSingleMain/PublicProfileSingleMainSocial'

const PublicProfileSingleHeader = ({ coverImgUrl, socialNetworks }) => {
    return (
        <header className="page__public-profile-single__header">
            {
                coverImgUrl ? 
                    <div className="page__public-profile-single__header__bkg" style={{background: `url(${coverImgUrl}) center center / cover no-repeat`}}>
                        <PublicProfileSingleMainSocial socialNetworks={socialNetworks}/>
                    </div> :
                    <div className="page__public-profile-single__header__bkg" style={{background: `#c5c9d2 center center / cover no-repeat`}}>
                        <PublicProfileSingleMainSocial socialNetworks={socialNetworks}/>
                    </div>
            }
        </header>
    )
}

PublicProfileSingleHeader.propTypes = {
    coverImgUrl: PropTypes.string,
    socialNetworks: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
        linkedin: PropTypes.string,
    }).isRequired,
}

export default PublicProfileSingleHeader