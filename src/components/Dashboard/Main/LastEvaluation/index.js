import React from "react";
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'

const LastEvaluation = ({ evaluation }) => {
    console.log(evaluation)
    return (
        <Card className="widget__last-evaluation shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Title>Last evaluation</Card.Title>
            <Card.Body>
                <h4>John</h4>
            </Card.Body>
        </Card>
    )
}

LastEvaluation.propTypes = {
    // evaluation: PropTypes.shape({
    //     form: {
    //         sport: '',
    //         name: '',
    //         categories: [{
    //             name: ''
    //         }],
    //         metrics: [{
    //             name: '',
    //             category: '',
    //             value: '',
    //             notes: ''
    //         }]
    //     },
    //     location: {
    //         description: '',
    //         placeId: ''
    //     },
    //     notes: '',
    //     createdAt: ''
    // })
    evaluation: PropTypes.object
}

export default LastEvaluation