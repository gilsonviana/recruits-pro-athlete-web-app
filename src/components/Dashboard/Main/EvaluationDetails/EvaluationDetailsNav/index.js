// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Components
import EvaluationDetailsOverview from '../EvaluationDetailsOverview'
import EvaluationDetailsNotes from '../EvaluationDetailsNotes'
import EvaluationDetailsRank from '../EvaluationDetailsRank'
import Badge from 'react-bootstrap/Badge'

import './style.css'

const EvaluationDetailsNav = ({ evaluation }) => {
    const [key, setKey] = useState('overview')

    const RankTitle = () => {
        return (
            <span className="text-dark">Rank <Badge variant="light">New</Badge></span>
        )
    }

    const renderRanking = () => {
        if (true) {
            return (
                <Tab tabClassName="controlled-evaluation-details-nav-has-rank" eventKey="rank" title={<RankTitle />}>
                    <EvaluationDetailsRank />
                </Tab>
            )
        }
        return (
            <Tab eventKey="rank" title="Rank" disabled={!evaluation.notes && true}>
                <EvaluationDetailsRank />
            </Tab>
        )
    }

    return (
        <Tabs id="controlled-evaluation-details-nav" activeKey={'rank'} onSelect={k => setKey(k)} className="evaluation-details-nav my-4">
            <Tab eventKey="overview" title="Overview">
                <EvaluationDetailsOverview evaluation={evaluation}/>
            </Tab>
            <Tab eventKey="notes" title="Notes" disabled={!evaluation.notes && true}>
                <EvaluationDetailsNotes notes={evaluation.notes}/>
            </Tab>
            {
                renderRanking()
            }
        </Tabs>
    )
}

EvaluationDetailsNav.propTypes = {
    evaluation: PropTypes.object.isRequired
}

export default EvaluationDetailsNav