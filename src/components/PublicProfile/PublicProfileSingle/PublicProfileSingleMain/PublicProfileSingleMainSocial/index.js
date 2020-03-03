// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const PublicProfileSingleMainSocial = () => {
    return (
        <div className="public-profile__single__main__social mb-4 d-none d-md-block" style={{marginRight: `2rem`}}>
            <div className="public-profile__single__main__social d-flex justify-content-end">
                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#365397', width: `2rem`, height: `2rem`}}>
                    <FaFacebookF color="#fff"/>
                </div>
                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#e4405f', width: `2rem`, height: `2rem`}}>
                    <FaInstagram color="#fff"/>
                </div>
                <div className="social-networks-icon-wrapper mr-2 rounded-sm d-flex align-items-center justify-content-center" style={{background: '#00a9f1', width: `2rem`, height: `2rem`}}>
                    <FaTwitter color="#fff"/>
                </div>
                <div className="social-networks-icon-wrapper rounded-sm d-flex align-items-center justify-content-center" style={{background: '#006db3', width: `2rem`, height: `2rem`}}>
                    <FaLinkedinIn color="#fff"/>
                </div>
            </div>
        </div>
    )
}

PublicProfileSingleMainSocial.propTypes = {

}

export default PublicProfileSingleMainSocial