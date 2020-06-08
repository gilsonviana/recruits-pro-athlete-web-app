// Dependencies
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import socketIOClient from "socket.io-client";
import KEYS from "../../../../config/keys";

// Components
import OverviewWelcome from "./OverviewWelcome";
import MetricsFlush from "./MetricsFlush";
import LastEvaluation from "./LastEvaluation";
import MarketingBanner from "../MarketingBanner";

const Overview = ({ evaluations, workouts, videos, subscriptionStatus }) => {
    const { useEffect, useState } = React;

    const [evaluationsState, setEvaluationsState] = useState([]);
    const [workoutsState, setWorkoutsState] = useState([]);
    const [videosState, setVideosState] = useState([]);

    useEffect(() => {
        // const socket = socketIOClient("http://192.168.0.111:3000", {
        //     transports: ["websocket"],
        // });
        // socket.on("connect", function () {
        //     console.log("connected!");
        //     socket.emit("greet", { message: "Hello Mr.Server!" });
        // });

        // socket.on("respond", function (data) {
        //     console.log(data);
        // });

        setEvaluationsState([...evaluations]);
        setWorkoutsState([...workouts]);
        setVideosState([...videos]);
    }, [evaluations, workouts, videos]);

    return (
        <div className="page__overview">
            {subscriptionStatus !== "ACTIVE" && (
                <MarketingBanner
                    title="Do more with Athletes Pro"
                    text={`
                            Boost your profile with unlimited video uploads, social media integration, 
                            contact references and more by subscribing to Athletes Pro.
                        `}
                />
            )}
            <OverviewWelcome />
            <Container fluid>
                <Row className="mb-4">
                    <Col>
                        <MetricsFlush
                            evaluations={evaluationsState.length}
                            workouts={workoutsState.length}
                            videos={videosState.length}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        {evaluations.length > 0 && (
                            <LastEvaluation
                                evaluation={evaluations[evaluations.length - 1]}
                            />
                        )}
                    </Col>
                    <Col xs={12} md={6} lg={4}></Col>
                    <Col xs={12} md={6} lg={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

Overview.propTypes = {
    evaluations: PropTypes.array.isRequired,
    workouts: PropTypes.array.isRequired,
    videos: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    evaluations: state.evaluations,
    workouts: state.workouts,
    videos: state.videos,
    subscriptionStatus: state.subscription.status,
});

export default connect(mapStateToProps)(Overview);
