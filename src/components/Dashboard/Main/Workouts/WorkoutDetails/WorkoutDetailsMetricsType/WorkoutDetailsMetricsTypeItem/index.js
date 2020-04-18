import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const WorkoutDetailsMetricsTypeItem = ({
    index,
    title,
    category,
    instructions
}) => {
    const renderToggleInstructions = () => {
        if (instructions) {
            return (
                <Accordion.Toggle as={Button} variant="link" eventKey={index} className="text-dark text-decoration-none pr-4">
                    <h6 style={{fontSize: 12}}>Instructions</h6>
                    <AiOutlinePlusCircle size="1.2rem" />
                </Accordion.Toggle>
            )
        }

        return (
            <Accordion.Toggle as={Button} variant="link" className="text-muted text-decoration-none pr-4">
                <h6 style={{fontSize: 12}}>Instructions</h6>
                <AiOutlinePlusCircle size="1.2rem"/>
            </Accordion.Toggle>
        )
    }

    return (
        <Card className="page__workouts__details__metrics__item shadow-sm mb-2">
            <div className="page__workouts__details__metrics__item__header d-flex justify-content-between">
                <div className="py-2 pl-4">
                    <h6>{title}</h6>
                    <h6 className="text-secondary">{category}</h6>
                </div>
                {renderToggleInstructions()}
            </div>
            <Accordion.Collapse eventKey={index}>
                <div className="bg-light px-4 py-2">
                    {instructions ? instructions : ''}
                </div>
            </Accordion.Collapse>
        </Card>
    )
}

WorkoutDetailsMetricsTypeItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    instructions: PropTypes.string
}

export default WorkoutDetailsMetricsTypeItem