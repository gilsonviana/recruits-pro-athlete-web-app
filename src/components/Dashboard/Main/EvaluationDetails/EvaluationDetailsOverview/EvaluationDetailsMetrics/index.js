// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const EvaluationDetailsMetrics = ({ metrics, handleSelect }) => {
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
                        {
                            metrics.map(metric => 
                                <tr className="border-top" key={metric._id} onClick={() => handleSelect(metric._id)} style={{cursor: 'pointer'}}>
                                    <td>{metric.name}</td>
                                    <td>{metric.category}</td>
                                    <td>{metric.value}</td>
                                    <td>{metric.notes}</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </Table>

        </Card>
    )
}

EvaluationDetailsMetrics.propTypes = {
    metrics: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
}

export default EvaluationDetailsMetrics