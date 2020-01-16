import React from "react";
import { Link, withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast'

import logo from '../../assets/images/logo.png'

import "./style.css";

const LoginPage = ({ history }) => {
  const [showToast, setShowToast] = React.useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/dashboard')
  }

    
  return (
    <div className="page__login">
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide style={{
        position: 'absolute',
        left: `50%`,
        transform: `translateX(${-50}%)`,
        backgroundColor: `#eb5a46`,
        color: `#eee`
      }}>
        <Toast.Body>Unable to login user. Email or password is wrong.</Toast.Body>
      </Toast>
      <Container fluid style={{
        justifyContent: 'space-between'
      }}>
        <header className="page__login__header">
          <img src={logo} alt="Recruits pro logo"/>
        </header>
        <Row>
          <Col xs={12} md={{ span: 4, offset: 4 }}>
            <section className="page__login__content">
              <div className="page__login__content__box">
                <div className="page__login__content__box__form">
                  <h3 className="page__login__content__box__form__title font-weight-bold">Log in to Athletes Pro</h3>
                  <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button type="submit">Log in</button>
                  </form>
                  <div className="page__login__content__footer">
                    <Link to="">Forgot password?</Link>
                    <Link to="">Sign up for an account</Link>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
        <Row style={{
          position: 'absolute',
          width: `100%`,
          bottom: 0,
          left: 0,
          height: `3rem`
        }}>
          <Col xs={12} md={{ span: 4, offset: 4 }}>
            <footer className="page__login__footer">
              <Link to="">Privacy policy</Link>
              <p>/</p>
              <Link to="">Terms of service</Link>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(LoginPage);
