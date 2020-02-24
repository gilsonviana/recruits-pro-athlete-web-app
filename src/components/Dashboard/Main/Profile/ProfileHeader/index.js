// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Assets
import './style.css'
import avatar from '../../../../../assets/images/user-avatar-placeholder.png'

const ProfileHeader = ({ avatarUrl, fullName, heading }) => {
    return (
        <header className="page__profile__header text-center px-4 pt-4 pb-2 border-bottom">
            <div className="page__profile__header__img rounded-circle overflow-hidden border border-success">
                {avatarUrl ? 
                    <img src={avatarUrl} alt="profile"/> :
                    <img src={avatar} alt="profile"/>
                }
            </div>
            <h3 className="mt-4">{fullName}</h3>
            <div className="page__profile__header__heading lead">
                <p>{heading}</p>
            </div>
        </header>
    )
}

ProfileHeader.propTypes = {
    fullName: PropTypes.string.isRequired,
    heading: PropTypes.string,
    avatarUrl: PropTypes.string,
    coverImgUrl: PropTypes.string
}

const mapStateToProps = (state) => ({
    fullName: state.profile.personal.fullName,
    heading: state.profile.personal.heading,
    avatarUrl: state.profile.personal.avatarUrl,
    coverImgUrl: state.profile.personal.coverImgUrl
})

export default connect(mapStateToProps)(ProfileHeader)