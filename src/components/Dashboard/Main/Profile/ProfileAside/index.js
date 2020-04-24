// Dependencies
import React from "react";
import { Link, useLocation } from 'react-router-dom'
import ListGroup from "react-bootstrap/ListGroup";

import './style.css'

const ProfileAside = () => {
  const location = useLocation()

  const isActive = (path = "") => {
    const { pathname } = location

    if (pathname === '/dashboard/profile' && path === 'details') {
      return "--active"
    }

    if (pathname.indexOf(path) >= 0) {
      return "--active"
    }

    return null
  }

  return (
    <div className="page__profile__aside shadow-sm mb-4">
        <ListGroup as="ul">
            <ListGroup.Item as="li" className={isActive("details")}>
              <Link to="/dashboard/profile" className="text-dark">Profile</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" className={isActive("account")}>
              <Link to="/dashboard/profile/account" className="text-dark">Account</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" className={isActive("social")}>
              <Link to="/dashboard/profile/social" className="text-dark">Social networks</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" className={isActive("sports")}>
              <Link to="/dashboard/profile/sports" className="text-dark">Sports</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" className={isActive("subscription") || isActive("subscribe")}>
              <Link to="/dashboard/profile/subscription" className="text-dark">Subscription</Link>
            </ListGroup.Item>
        </ListGroup>
    </div>
  );
};

export default ProfileAside;
