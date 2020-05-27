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

const PublicProfileSingleMain = ({ profile, subscriptionStatus }) => {
    const isSubscriber = subscriptionStatus !== 'ACTIVE' ? false : true
    
    return (
        <main className="page__public-profile-single__main">
            <div className="page__public-profile-single__main__content">
                <Tabs defaultActiveKey="videos" id="uncontrolled-tab-example" className="pl-md-4">
                    <Tab eventKey="videos" title={<PublicProfileSingleMainNavItem title="Videos" icon={FiVideo}/>}>
                        <PublicProfileSingleMainVideos 
                            videos={profile.videos}/>
                    </Tab>
                    <Tab eventKey="evaluations" title={<PublicProfileSingleMainNavItem title="Evaluations" icon={FaWpforms}/>}>
                        <PublicProfileSingleMainEvaluations 
                            evaluations={profile.evaluations} 
                            videoEvaluations={profile.videoEvaluations} 
                            subscriptionStatus={subscriptionStatus}/>
                    </Tab>
                    <Tab eventKey="events" title={<PublicProfileSingleMainNavItem title="Events" icon={FaRegNewspaper}/>}>
                        <PublicProfileSingleMainEvents />
                    </Tab>
                    <Tab eventKey="info" title={<PublicProfileSingleMainNavItem title="Info" icon={FaRegIdBadge}/>}>
                        <PublicProfileSingleMainInfo 
                            personal={profile.personal}
                            location={profile.location}
                            sports={profile.sports}
                            education={profile.education}
                            isSubscriber={isSubscriber}
                        />
                    </Tab>
                </Tabs>
            </div>
        </main>
    )
}

PublicProfileSingleMain.propTypes = {
    profile: PropTypes.object.isRequired,
    subscriptionStatus: PropTypes.string.isRequired
}

export default PublicProfileSingleMain