// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FaRegIdBadge, FaWpforms, FaRegNewspaper } from 'react-icons/fa'
import { FiVideo } from 'react-icons/fi'

// Assets
import './style.css'

// Components
import PublicProfileSingleMainNavItem from './PublicProfileSingleMainNavItem'
import PublicProfileSingleMainInfo from './PublicProfileSingleMainInfo'
import PublicProfileSingleMainEvaluations from './PublicProfileSingleMainEvaluations'
import PublicProfileSingleMainEvents from './PublicProfileSingleMainEvents'
import PublicProfileSingleMainVideos from './PublicProfileSingleMainVideos'

const PublicProfileSingleMain = ({ profile }) => {
    console.log('PublicProfileSingleMain', profile)
    return (
        <main className="page__public-profile-single__main">
            <div className="page__public-profile-single__main__content">
                <Tabs defaultActiveKey="info" id="uncontrolled-tab-example" className="pl-md-4">
                    <Tab eventKey="info" title={<PublicProfileSingleMainNavItem title="Info" icon={FaRegIdBadge}/>}>
                        <PublicProfileSingleMainInfo 
                            personal={profile.personal}
                            location={profile.location}
                            sports={profile.sports}
                            education={profile.education}
                        />
                    </Tab>
                    <Tab eventKey="evaluations" title={<PublicProfileSingleMainNavItem title="Evaluations" icon={FaWpforms}/>}>
                        <PublicProfileSingleMainEvaluations evaluations={profile.evaluations} subscriptionStatus={profile.subscription.status}/>
                    </Tab>
                    <Tab eventKey="events" title={<PublicProfileSingleMainNavItem title="Events" icon={FaRegNewspaper}/>}>
                        <PublicProfileSingleMainEvents />
                    </Tab>
                    <Tab eventKey="videos" title={<PublicProfileSingleMainNavItem title="Videos" icon={FiVideo}/>}>
                        <PublicProfileSingleMainVideos />
                    </Tab>
                </Tabs>
            </div>
        </main>
    )
}

PublicProfileSingleMain.propTypes = {
    profile: PropTypes.object.isRequired
}

export default PublicProfileSingleMain