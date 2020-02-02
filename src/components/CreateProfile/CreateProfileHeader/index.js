// Dependencies
import React from 'react'

// Assets
import brand from '../../../assets/images/logo-dashboard.png'
import baseball1 from '../../../assets/images/baseball-1.jpg'
import './style.css'

const CreateProfileHeader = () => {
    return (
        <header className="create-profile__header bg-dark">
            <div className="create-profile__header__background">
                <img src={baseball1} alt="z"/>
            </div>  
            <div className="create-profile__header__overlay">
                <img src={brand} alt="Recruits Pro Logo" className="create-profile__header__overlay__img mt-4"/>
            </div>
        </header>
    )
}

export default CreateProfileHeader