// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const EvaluationDetailsMetrics = () => {
    return (
        <Card className="evaluation-details-metrics shadow-sm pt-3 px-3 mb-5 bg-white rounded">
            <Card.Title>Metrics</Card.Title>
                <Table hover size="sm" borderless>
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Category</th>
                            <th>Value</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-top">
                            <td><Link to="">Arm velocity</Link></td>
                            <td>Pitching</td>
                            <td>96</td>
                            <td>Good arm, right arm.</td>
                        </tr>
                        <tr className="border-top">
                            <td><Link to="">Bat speed</Link></td>
                            <td>Pitching</td>
                            <td>88</td>
                            <td>Need to work on grip.</td>
                        </tr>
                    </tbody>
                </Table>

        </Card>
    )
}

export default EvaluationDetailsMetrics