// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Components
import EvaluationDetailsOverview from '../EvaluationDetailsOverview'

const EvaluationDetailsNav = () => {
    const [key, setKey] = useState('overview')

    return (
        <Tabs id="controlled-evaluation-details-nav" activeKey={key} onSelect={k => setKey(k)} className="evaluation-details-nav my-4">
            <Tab eventKey="overview" title="Overview">
                <EvaluationDetailsOverview />
            </Tab>
            <Tab eventKey="notes" title="Notes">
                <p>notes</p>
            </Tab>
        </Tabs>
    )
}

EvaluationDetailsNav.propTypes = {

}

export default EvaluationDetailsNav