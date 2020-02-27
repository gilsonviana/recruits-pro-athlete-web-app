// Dependencies
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FaRegIdBadge, FaWpforms, FaRegNewspaper } from 'react-icons/fa'
import { FiVideo } from 'react-icons/fi'

// Assets
import './style.css'

// Components
import PublicProfileSingleMainNavItem from './PublicProfileSingleMainNavItem'

const PublicProfileSingleMain = () => {
    return (
        <main className="page__public-profile-single__main">
            <div className="page__public-profile-single__main__content pt-4 d-none d-md-block">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pl-4">
                    <Tab eventKey="info" title={<PublicProfileSingleMainNavItem title="Info" icon={FaRegIdBadge}/>}>
                        <p>1</p>
                    </Tab>
                    <Tab eventKey="events" title={<PublicProfileSingleMainNavItem title="Events" icon={FaRegNewspaper}/>}>
                        <p>1</p>
                    </Tab>
                    <Tab eventKey="evaluations" title={<PublicProfileSingleMainNavItem title="Evaluations" icon={FaWpforms}/>}>
                        <p>1</p>
                    </Tab>
                    <Tab eventKey="videos" title={<PublicProfileSingleMainNavItem title="Videos" icon={FiVideo}/>}>
                        <p>1</p>
                    </Tab>
                </Tabs>
            </div>
        </main>
    )
}

export default PublicProfileSingleMain