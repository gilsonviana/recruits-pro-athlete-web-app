// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Assets
import './style.css'
import avatar from '../../../../../assets/images/avatar-example.jpg'

const ProfileHeader = ({ avatarUrl, fullName, heading }) => {
    return (
        <header className="page__profile__header text-center px-4 pt-4 pb-2 border-bottom">
            <div className="page__profile__header__img rounded-circle overflow-hidden border border-success">
                <img src={avatar} className="img-fluid" alt="profile"/>
            </div>
            <h3 className="mt-4">John Dow</h3>
            <div className="page__profile__header__heading lead">
                <p>lorem ipsum ...</p>
            </div>
        </header>
    )
}

ProfileHeader.propTypes = {
    fullName: PropTypes.string,
    heading: PropTypes.string,
    avatarUrl: PropTypes.string
}

export default ProfileHeader