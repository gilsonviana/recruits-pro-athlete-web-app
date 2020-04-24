// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Assets
import './style.css'
import avatarPlaceholder from '../../../../../assets/images/user-avatar-placeholder.png'

const ProfileHeader = ({ images, avatarUrl, coverImgUrl, fullName, heading }) => {
    const { avatar, cover } = images

    if (cover) {
        return (
            <header className="page__profile__header text-center px-4 pt-4 pb-2 border-bottom" style={{background: `url(${cover}) no-repeat center`}}>
                <div className="page__profile__header__img rounded-circle overflow-hidden border border-success">
                    {avatar ? 
                        <img src={avatar} alt="profile"/> : 
                    avatarUrl ? 
                        <img src={avatarUrl} alt="profile"/> :
                        <img src={avatarPlaceholder} alt="profile"/>
                    }
                </div>
                <div style={{background: '#ddd'}}>
                    <h3 className="mt-4">{fullName}</h3>
                </div>
                <div className="page__profile__header__heading lead d-inline-block px-1">
                    <p>{heading}</p>
                </div>
            </header>
        )
    }

    return (
        <header className="page__profile__header text-center px-4 pt-4 pb-2 border-bottom" style={coverImgUrl ? {background: `url(${coverImgUrl}) no-repeat center`}: {background: `linear-gradient(90deg, rgb(234, 235, 238), transparent)`}}>
            <div className="page__profile__header__img rounded-circle overflow-hidden border border-success">
                {avatar ? 
                    <img src={avatar} alt="profile"/> : 
                avatarUrl ? 
                    <img src={avatarUrl} alt="profile"/> :
                    <img src={avatarPlaceholder} alt="profile"/>
                }
            </div>
            <h3 className="mt-4">{fullName}</h3>
            <div className="page__profile__header__heading lead d-inline-block px-1">
                <p>{heading}</p>
            </div>
        </header>
    )
}

ProfileHeader.propTypes = {
    images: PropTypes.shape({ avatar: PropTypes.any, cover: PropTypes.any }).isRequired,
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