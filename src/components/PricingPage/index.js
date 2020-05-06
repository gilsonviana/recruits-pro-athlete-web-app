// Dependencies
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Button } from "../../styled-components";
import { FiCheck } from "react-icons/fi";
import Popup from "./pricing-page-popup";
import Select from "react-select";

// Services
import { createSubscription } from "../../services/paypal";

// Assets
import { ReactComponent as BookmarkIcon } from "../../assets/images/bookmark-black-shape.svg";
import { ReactComponent as Bg1 } from "../../assets/images/bg-1.svg";
import { ReactComponent as Bg2 } from "../../assets/images/bg-2.svg";
import { ReactComponent as Bg3 } from "../../assets/images/bg-3.svg";
import logo from "../../assets/images/logo.png";
import "./style.css";

const PricingPage = ({ history, token, subscriptionPlans }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [plansOption, setPlansOption] = React.useState(null);
  const [showPopup, setShowPopup] = React.useState({
    first: true,
    isVisible: false
  });

  React.useEffect(() => {
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
    setSelectedOption({ ...selectedOption });
  };

  const handleSubmitFree = () => {
    // Display popup once
    if (showPopup.first) {
      setShowPopup({
        first: false,
        isVisible: true
      });

      return;
    }

    history.push('/create-profile')
  };

  const handleSubmitSubscriber = async () => {
    const res = await createSubscription(token, selectedOption.value);

    if (!res) {
      alert("Could not create subscription.");
      return;
    }
    window.location = res.subscription.href;
  };

  const togglePopup = () => {
    setShowPopup({ ...showPopup, isVisible: false });
  };

  if (!plansOption) {
    return <></>;
  }

  return (
    <>
      <Bg1 className="body__bg" style={{ top: `30rem`, left: `2rem` }} />
      <Bg2 className="body__bg" style={{ top: `0`, right: `2rem` }} />
      <Bg3 className="body__bg" style={{ top: `35%`, right: `5rem` }} />
      {showPopup.isVisible && <Popup handleClose={togglePopup} handleSignupFree={handleSubmitFree} handleSignupPro={handleSubmitSubscriber} />}
      <div className="page__pricing">
        <Container
          style={{
            justifyContent: "space-between"
          }}
        >
          <Row>
            <Col
              xs={12}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
            >
              <header className="page__pricing__header">
                <img src={logo} alt="Recruits pro logo" className="mb-5" />
                <h2>Choose the right plan for your future.</h2>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    The secret to winning is constant, consistent management.
                  </p>
                  <footer className="blockquote-footer">Tom Landry</footer>
                </blockquote>
              </header>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{ span: 10, offset: 1 }}>
              <section className="page__pricing__content">
                <div className="page__pricing__content__box mx-auto">
                  <Row>
                    <Col xs={12} lg={6}>
                      <Card className="page__pricing__card">
                        <Card.Body>
                          <Badge variant="success" className="mb-4">
                            Starter
                          </Badge>
                          <Card.Title className="d-flex">
                            <h1 className="mb-0">$0</h1>{" "}
                          </Card.Title>
                          <Card.Subtitle className="my-4">
                            Basic plan for starters.
                          </Card.Subtitle>
                          <div className="mb-4" style={{minHeight: `38px`}}>&nbsp;</div>
                          <ul className="page__pricing__card__features">
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Create and share your profile
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Access to the latest performance evaluation
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Search for sport events
                            </li>
                          </ul>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                          <Button onClick={handleSubmitFree}>
                            Select Free Plan
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Card className="page__pricing__card mt-4 mt-md-0">
                        <BookmarkIcon className="page__pricing__card__bookmark" />
                        <Card.Body>
                          <Badge variant="success" className="mb-4">
                            Pro
                          </Badge>
                          {selectedOption &&
                          selectedOption.label === "Yearly" ? (
                            <Card.Title className="d-flex">
                              <h1 className="mb-0">$25</h1>{" "}
                              <h4 className="text-muted mb-0">/yearly</h4>
                            </Card.Title>
                          ) : (
                            <Card.Title className="d-flex">
                              <h1 className="mb-0">$4</h1>{" "}
                              <h4 className="text-muted mb-0">/month</h4>
                            </Card.Title>
                          )}
                          <Card.Subtitle className="my-4">
                            Become a Pro! Upgrade to Athlete Pro for unlimited access to all premium features.
                          </Card.Subtitle>
                          <Select
                            className="mb-4"
                            placeholder="Monthly"
                            onChange={handleChange}
                            options={plansOption}
                          />
                          <ul className="page__pricing__card__features">
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Create and share your profile
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Access to the latest performance evaluation
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Access to all previous evaluations
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Access performance charts and coach notes
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" color="#fff"/>
                              Upload performance videos
                            </li>
                          </ul>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                          <Button onClick={handleSubmitSubscriber}>
                            Select Pro Plan
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </section>
            </Col>
          </Row>
          <Row
            style={{
              width: `100%`,
              bottom: 0,
              left: 0,
              height: `3rem`
            }}
          >
            <Col xs={12} md={{ span: 4, offset: 4 }}>
              <footer className="page__pricing__footer">
                <Link to="">Privacy policy</Link>
                <p>/</p>
                <Link to="">Terms of service</Link>
              </footer>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  subscriptionPlans: state.subscriptionPlans
});

export default connect(mapStateToProps)(withRouter(PricingPage));
