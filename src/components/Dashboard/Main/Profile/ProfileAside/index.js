// Dependencies
import React from "react";
import { Link } from 'react-router-dom'
import ListGroup from "react-bootstrap/ListGroup";

import './style.css'

const ProfileAside = () => {
  return (
    <div className="page__profile__aside shadow-sm mb-4">
        <ListGroup as="ul">
            <ListGroup.Item as="li" className="--active">
              <Link to="/dashboard/profile" className="text-dark">Profile</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Link to="/dashboard/profile/account" className="text-dark">Account</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Link to="/dashboard/profile/social" className="text-dark">Social</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Link to="/dashboard/profile/subscription" className="text-dark">Subscription</Link>
            </ListGroup.Item>
        </ListGroup>
    </div>
  );
};

export default ProfileAside;
