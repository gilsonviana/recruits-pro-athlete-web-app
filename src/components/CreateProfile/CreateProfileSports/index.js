// Dependencies
import React from 'react'
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CreateProfileSports = ({ handleTabKey }) => {
    return (
        <div className="create-profile__sport py-4">
            <Form noValidate>
                <Form.Label className="font-weight-bold">Primary</Form.Label>
                <Form.Group>
                    <Form.Label>Sport</Form.Label>
                    <Form.Control as="select">
                        <option value="">Choose a sport</option>
                        <option value="baseball">Baseball</option>
                        <option value="basketball">Basketball</option>
                        <option value="football">Football</option>
                        <option value="soccer">Soccer</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Other sport</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Positions</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text>Separate positions by comma.</Form.Text>
                </Form.Group>
                <hr />
                <Form.Label className="font-weight-bold">Secondary</Form.Label>
                <Form.Group>
                    <Form.Label>Sport</Form.Label>
                    <Form.Control as="select">
                        <option value="">Choose a sport</option>
                        <option value="baseball">Baseball</option>
                        <option value="basketball">Basketball</option>
                        <option value="football">Football</option>
                        <option value="soccer">Soccer</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Other sport</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Positions</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text>Separate positions by comma.</Form.Text>
                </Form.Group>
                <Form.Group className="clearfix">
                    <Button
                        className="create-profile__location__button-next float-left"
                        onClick={() => handleTabKey("personal")}>
                        <FaArrowLeft className="mr-2" /> Previous
                    </Button>
                    <Button
                        className="create-profile__location__button-next float-right mt-3 mt-md-0"
                        onClick={() => handleTabKey("education")}>
                        Next<FaArrowRight className="ml-2" />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

CreateProfileSports.propTypes = {
    handleTabKey: PropTypes.func.isRequired
}

export default CreateProfileSports