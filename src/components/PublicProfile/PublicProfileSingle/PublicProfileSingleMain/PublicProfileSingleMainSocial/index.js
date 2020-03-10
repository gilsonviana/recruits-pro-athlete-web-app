// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const PublicProfileSingleMainSocial = ({ socialNetworks }) => {
    return (
        <div className="public-profile__single__main__social mb-4 d-none d-md-block" style={{marginRight: `2rem`}}>
            <div className="public-profile__single__main__social d-flex justify-content-end">
                {socialNetworks.facebook ?
                    <a href={socialNetworks.facebook} target="_blank" rel="noopener noreferrer">
                        <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                            <FaFacebookF color="#fff"/>
                        </div>
                    </a> :
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#f6f7f9', width: `2rem`, height: `2rem`}}>
                        <FaFacebookF color="#c5c9d2"/>
                    </div>
                }
                {socialNetworks.instagram ?
                    <a href={socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                        <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                            <FaInstagram color="#fff"/>
                        </div>
                    </a> :
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#f6f7f9', width: `2rem`, height: `2rem`}}>
                        <FaInstagram color="#c5c9d2"/>
                    </div>
                }
                {socialNetworks.twitter ?
                    <a href={socialNetworks.twitter} target="_blank" rel="noopener noreferrer">
                        <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                            <FaTwitter color="#fff"/>
                        </div>
                    </a> :
                    <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#f6f7f9', width: `2rem`, height: `2rem`}}>
                        <FaTwitter color="#c5c9d2"/>
                    </div>
                }
                {socialNetworks.linkedin ?
                    <a href={socialNetworks.linkedin} target="_blank" rel="noopener noreferrer">
                        <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                            <FaLinkedinIn color="#fff"/>
                        </div>
                    </a> :
                    <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#f6f7f9', width: `2rem`, height: `2rem`}}>
                        <FaLinkedinIn color="#c5c9d2"/>
                    </div>
                }
            </div>
        </div>
    )
}

PublicProfileSingleMainSocial.propTypes = {
    socialNetworks: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
        linkedin: PropTypes.string,
    }).isRequired,
}

export default PublicProfileSingleMainSocial