// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Components
import EvaluationDetailsOverview from '../EvaluationDetailsOverview'
import EvaluationDetailsNotes from '../EvaluationDetailsNotes'

const EvaluationDetailsNav = ({ evaluation }) => {
    const [key, setKey] = useState('overview')

    return (
        <Tabs id="controlled-evaluation-details-nav" activeKey={key} onSelect={k => setKey(k)} className="evaluation-details-nav my-4">
            <Tab eventKey="overview" title="Overview">
                <EvaluationDetailsOverview evaluation={evaluation}/>
            </Tab>
            <Tab eventKey="notes" title="Notes" disabled={!evaluation.notes && true}>
                <EvaluationDetailsNotes notes={evaluation.notes}/>
            </Tab>
        </Tabs>
    )
}

EvaluationDetailsNav.propTypes = {
    evaluation: PropTypes.object.isRequired
}

export default EvaluationDetailsNav