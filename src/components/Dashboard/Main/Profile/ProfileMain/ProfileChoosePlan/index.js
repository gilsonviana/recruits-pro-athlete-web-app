// Dependencies
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Select from "react-select";
import { FiCheck } from "react-icons/fi";
import { Button } from '../../../../../../styled-components'

// Services
import { createSubscription } from "../../../../../../services/paypal"

// Assets
import './style.css'
import { ReactComponent as BookmarkIcon } from "../../../../../../assets/images/bookmark-black-shape.svg";

const ProfileChoosePlan = ({ token, subscriptionPlans }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [plansOption, setPlansOption] = React.useState(null);

    useEffect(() => {
        // Get subscription plans from store and mutate data for dropdown
        const setSelectPlanOptions = () => {
            setPlansOption([
                ...subscriptionPlans.map(({ plan_id, name }) => ({
                    value: plan_id,
                    label: name
                }))
            ]);
        };

        const setInitialSelectedOption = () => {
            setSelectedOption(
                subscriptionPlans.map(({ plan_id, name }) => ({
                    value: plan_id,
                    label: name
                }))[0]
            );
        };
        setSelectPlanOptions();
        setInitialSelectedOption();
    }, [subscriptionPlans]);

    const handleChange = selectedOption => {
        setSelectedOption({ ...selectedOption })
    }

    const handleSubscribe = async () => {
        const res = await createSubscription(token, selectedOption.value);

        if (!res) {
            alert("Could not create subscription.");
            return;
        }
        window.location = res.subscription.href;
    }

    return (
        <Card className="page__choose-plan__card mt-4 mt-md-0">
            <BookmarkIcon className="page__choose-plan__card__bookmark" />
            <Card.Body>
                <Badge variant="success" className="mb-4">Pro</Badge>
                {selectedOption && selectedOption.label === "Yearly" ? (
                    <Card.Title className="d-flex">
                        <h1 className="mb-0">$50</h1>{" "}
                        <h4 className="text-muted mb-0">/yearly</h4>
                    </Card.Title>
                ) : (
                        <Card.Title className="d-flex">
                            <h1 className="mb-0">$5</h1>{" "}
                            <h4 className="text-muted mb-0">/month</h4>
                        </Card.Title>
                    )}
                <Card.Subtitle className="my-4">The perfect plan to go if you want to up skill your game.</Card.Subtitle>
                <Select
                    className="mb-4"
                    placeholder="Monthly"
                    onChange={handleChange}
                    options={plansOption}
                />
                <ul className="page__choose-plan__card__features">
                    <li className="page__choose-plan__card__features__item">
                        <FiCheck className="page__choose-plan__card__features__item__icon" color="#fff"/>
                        Create and share your profile
                    </li>
                    <li className="page__choose-plan__card__features__item">
                        <FiCheck className="page__choose-plan__card__features__item__icon" color="#fff"/>
                        Access to the latest performance evaluation
                    </li>
                    <li className="page__choose-plan__card__features__item">
                        <FiCheck className="page__choose-plan__card__features__item__icon" color="#fff"/>
                        Access to all previous evaluations
                    </li>
                    <li className="page__choose-plan__card__features__item">
                        <FiCheck className="page__choose-plan__card__features__item__icon" color="#fff"/>
                        Access performance charts and coach notes
                    </li>
                    <li className="page__choose-plan__card__features__item">
                        <FiCheck className="page__choose-plan__card__features__item__icon" color="#fff"/>
                        Upload performance videos
                    </li>
                </ul>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <Button onClick={handleSubscribe}>Select plan</Button>
            </Card.Footer>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    token: state.auth.token,
    subscriptionPlans: state.subscriptionPlans
})

export default connect(mapStateToProps)(ProfileChoosePlan)