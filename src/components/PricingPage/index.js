import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Button } from "../../styled-components";
import { FiCheck } from "react-icons/fi";
import Popup from "./pricing-page-popup";
import { createSubscription } from '../../services/paypal'
import Select from 'react-select';

import { ReactComponent as BookmarkIcon } from "../../assets/images/bookmark-black-shape.svg";
import { ReactComponent as Bg1 } from "../../assets/images/bg-1.svg";
import { ReactComponent as Bg2 } from "../../assets/images/bg-2.svg";
import { ReactComponent as Bg3 } from "../../assets/images/bg-3.svg";
import logo from "../../assets/images/logo.png";

import "./style.css";

const PricingPage = ({ 
  history,
  subscriptionPlans 
}) => {
  const [selectedOption, setSelectedOption] = React.useState(null)
  const [plansOption, setPlansOption] = React.useState([])
  const [showPopup, setShowPopup] = React.useState({
    first: true,
    isVisible: false
  })
  
  React.useEffect(() => {
    const setSelectPlanOptions = () => {
      setPlansOption([...subscriptionPlans.map(({ plan_id, name }) => ({
        value: plan_id,
        label: name
      }))])
    }
    setSelectPlanOptions()
     
  }, [subscriptionPlans])

  const handleChange = selectedOption => {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  const handleSubmitFree = () => {
    if (showPopup.first) {
      setShowPopup({
        first: false,
        isVisible: true
      })
    }
  };

  const handleSubmitSubscriber = async () => {
    const res = await createSubscription('P-2BE45829GU5364001LYRRAVQ', { givenName: 'Gil', surname: 'Viana' })
    window.location = res.links[0].href
  };

  const togglePopup = () => {
    setShowPopup({...showPopup, isVisible: false})
  }

  return (
    <>
      <Bg1 className="body__bg" style={{ top: `30rem`, left: `2rem` }}/>
      <Bg2 className="body__bg" style={{ top: `0`, right: `2rem` }} />
      <Bg3 className="body__bg" style={{ top: `35%`, right: `5rem` }} />
      {
        (showPopup.isVisible) && <Popup handleClose={togglePopup} />
      }
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
                <div className="page__pricing__content__box">
                  <Row>
                    <Col xs={12} md={6}>
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
                          <ul className="page__pricing__card__features">
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Create and share your profile
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Access to the latest performance evaluation
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Search for sport events
                            </li>
                          </ul>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                          <Button onClick={handleSubmitFree}>Select plan</Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card className="page__pricing__card">
                        <BookmarkIcon className="page__pricing__card__bookmark" />
                        <Card.Body>
                          <Badge variant="success" className="mb-4">
                            Pro
                          </Badge>
                          {
                            (selectedOption) && (selectedOption.label === 'Yearly') ? 
                            <Card.Title className="d-flex">
                              <h1 className="mb-0">$50</h1>{" "}
                              <h4 className="text-muted mb-0">/yearly</h4>
                            </Card.Title> : 
                            <Card.Title className="d-flex">
                              <h1 className="mb-0">$5</h1>{" "}
                              <h4 className="text-muted mb-0">/month</h4>
                            </Card.Title>
                          }
                          <Card.Subtitle className="my-4">
                            The perfect plan to go if you want to up skill your
                            game.
                          </Card.Subtitle>
                          <Select 
                            value={selectedOption || 'Monthly'}
                            onChange={handleChange}
                            options={plansOption}
                          />
                          <ul className="page__pricing__card__features">
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Create and share your profile
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Access to the latest performance evaluation
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Access to all previous evaluations
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Access performance charts and coach notes
                            </li>
                            <li className="page__pricing__card__features__item">
                              <FiCheck className="page__pricing__card__features__item__icon" />
                              Upload performance videos
                            </li>
                          </ul>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                          <Button onClick={handleSubmitSubscriber}>Select plan</Button>
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
              position: "absolute",
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

const mapStateToProps = (state) => ({
  subscriptionPlans: state.subscriptionPlans
})

export default connect(mapStateToProps)(withRouter(PricingPage));
