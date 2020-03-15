// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { FiMoreVertical } from 'react-icons/fi'

// Assets
import './style.css'

const VideoItemPlayer = ({ videoUrl, title, id, deleteVideo }) => {
    const handleDelete = () => {
        deleteVideo(id)
    }
    return (
        <div className="video-item-player-wrapper">
            <div className="video-item-player-header">
                <h6 className="font-weight-bold m-0">{title}</h6>
                {
                    id && 
                    <DropdownButton title={<FiMoreVertical/>} variant="light" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1" onClick={handleDelete}>Remove video</Dropdown.Item>
                    </DropdownButton>
                }
            </div>
            <ReactPlayer
                url={videoUrl}
                className='video-item-player'
                light={true}
                width='100%'
                height='100%'
                />
        </div>
    )
}

VideoItemPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    deleteVideo: PropTypes.func
}

export default VideoItemPlayer