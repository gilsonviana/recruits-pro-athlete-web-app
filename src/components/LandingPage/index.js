import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingPageMain from './LandingPageMain'
import LandingPageFooter from './LandingPageFooter'

import './style.css'

const LandingPage = () => {
    return (
        <div className="page__landing">
            <LandingPageHeader />
            <LandingPageMain />
            <LandingPageFooter />
        </div>
    )
}

export default LandingPage