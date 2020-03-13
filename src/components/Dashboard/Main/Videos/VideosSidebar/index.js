// Dependencies
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ListGroup from "react-bootstrap/ListGroup";

// Assets
import './style.css'

const VideosSidebar = () => {
    const location = useLocation()

    const isActive = (path = "") => {
        const { pathname } = location

        if (pathname === '/dashboard/videos' && path === 'my') {
            return "--active"
        }

        if (pathname.indexOf(path) >= 0) {
            return "--active"
        }

        return null
    }

    return (
        <div className="page__videos__videos-sidebar mb-4">
            <ListGroup as="ul" className="shadow-sm mb-4 mb-md-0">
                <ListGroup.Item as="li" className={isActive("my")}>
                    <Link to="/dashboard/videos" className="text-dark">My videos</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className={isActive("add")}>
                    <Link to="/dashboard/videos/add" className="text-dark">Add videos</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default VideosSidebar