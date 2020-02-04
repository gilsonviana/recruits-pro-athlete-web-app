// Dependencies
import React from 'react'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import './style.css'

const CreateProfileHeader = () => {
    return (
        <header className="create-profile__header bg-dark overflow-hidden"> 
            <ul className="create-profile__header__carousel">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul>
            <div className="create-profile__header__overlay">
                <img src={brand} alt="Recruits Pro Logo" className="create-profile__header__overlay__img mt-4"/>
                <h3 className="d-md-none text-center text-white mt-4">Create Profile</h3>
            </div>
        </header>
    )
}

export default CreateProfileHeader