// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { FaYoutube } from "react-icons/fa"
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'

// Assets
import './style.css'

const VideosAdd = ({ subscriptionStatus, videos, addVideo, loading }) => {
    const [videoDetails, setVideoDetails] = useState({
        title: '',
        platform: 'youtube',
        url: ''
    })
    const [errorMessage, setErrorMessage] = useState({
        title: '',
        url: ''
    })

    const limitReached = subscriptionStatus !== 'ACTIVE' && videos.length >= 1 ? true : false

    const isFormValid = () => Object.values(errorMessage).every(i => i === '') && Object.values(videoDetails).every(i => i !== '')

    const validateField = (e) => {
        const { target } = e
        
        if (!target.value.trim()) {
            setErrorMessage({
                ...errorMessage,
                [target.name]: 'Required'
            })
            return
        }

        setErrorMessage({
            ...errorMessage,
            [target.name]: ''
        })
    }

    const handleOnChange = (e) => {
        const { target } = e
        
        validateField(e)
        setVideoDetails({
            ...videoDetails,
            [target.name]: target.value.trimStart()
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        if (isFormValid()) {
            addVideo(videoDetails)
            setVideoDetails({
                title: '',
                platform: 'youtube',
                url: ''
            })
        }
    }

    return (
        <div className="page__videos__videos-add">
            <Form noValidate onSubmit={handleSubmit} className="position-relative clearfix">
                {limitReached && 
                    <>
                        <Form.Text className="text-danger font-weight-bold lead">You have reached the videos upload limit.</Form.Text>
                        <Form.Text className="text-danger font-weight-bold lead">Hit subscribe above to add unlimited videos and access all premium features.</Form.Text>
                    </>
                }
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Platform</Form.Label>
                    <Form.Check inline name="youtube" defaultChecked label={<FaYoutube size={`2rem`} color="#FF0000"/>} type="radio" id={`inline-youtube-radio`}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Title</Form.Label>
                    <Form.Control disabled={limitReached} value={videoDetails.title} type="text" name="title" onChange={handleOnChange}/>
                    <Form.Text className="text-danger">{errorMessage.title}</Form.Text>
                    <Form.Text className="text-muted">Use the title to tell a little about the video you're uploading</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Video Url</Form.Label>
                    <Form.Control disabled={limitReached} value={videoDetails.url} type="text" name="url" onChange={handleOnChange} placeholder="https://www.youtube.com/watch?" />
                    <Form.Text className="text-danger">{errorMessage.url}</Form.Text>
                    <Form.Text className="text-muted">Insert a valid YouTube url</Form.Text>
                </Form.Group>
                <Button disabled={!isFormValid()} type="submit" variant="success" className="d-flex float-right mt-2 mt-lg-0">
                    Add video 
                    {loading && <Loader
                                        className="pl-2"
                                        type="Oval"
                                        color="#00FF00"
                                        width={25}
                                        height={25}
                                    />}
                </Button>
            </Form>
            {videoDetails.url && 
            <div className="page__videos__videos-add__preview mt-4">
                <ReactPlayer
                    url={videoDetails.url}
                    className='page__videos__videos-add__preview__player'
                    playing
                    width='100%'
                 />
            </div>}
        </div>
    )
}

VideosAdd.propTypes = {
    subscriptionStatus: PropTypes.string.isRequired,
    videos: PropTypes.array.isRequired,
    addVideo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    subscriptionStatus: state.subscription.status,
    videos: state.videos
})

export default connect(mapStateToProps)(VideosAdd)
