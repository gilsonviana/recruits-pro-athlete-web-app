import React from "react";
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card'
import { GiWhistle } from "react-icons/gi";

const LastEvaluation = ({ evaluation }) => {
    return (
        <Card className="widget__last-evaluation shadow-sm pt-3 px-3 mb-5 bg-white rounded">
            <Card.Title>Last evaluation</Card.Title>
            <Card.Body>
                 <div className="d-flex text-muted">
                    <GiWhistle size={20} className="mr-2" />
                    <h5>John</h5>
                 </div>
            </Card.Body>
            <Card.Footer className="bg-transparent border-0 m-0 p-0">
                <div className="text-right">
                    <p>Feb, 9</p>
                </div>
            </Card.Footer>
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