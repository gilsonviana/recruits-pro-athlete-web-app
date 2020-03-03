// Dependencies
import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'

// Service
import { getAthleteByName } from '../../services/user'

// Components
import PublicProfileNavbar from './PublicProfileNavbar'
import PublicProfile404 from './PublicProfile404'
import PublicProfileSingle from './PublicProfileSingle'
import PublicProfileListing from './PublicProfileListing'


const PublicProfile = () => {
    const [athleteList, setAthleteList] = useState([])
    const [show404, setShow404] = useState(false)

    const { fullName } = useParams()

    useEffect(() => {
        const getAthletes = async () => {
            const res = await getAthleteByName(fullName)

            if (res.length > 0) {
                setShow404(false)
                setAthleteList([...res])
                return
            }

            setShow404(true)
        }

        getAthletes()
    }, [])

    return (
        <div className="page__public-profile">
            <PublicProfileNavbar />
            {/* {show404 && <PublicProfile404 />}
            {
                athleteList.map((athlete, i) => <p key={`public-profile-${i}`}>Test</p>)
            } */}
            <PublicProfileSingle />
            {/* <PublicProfileListing /> */}
        </div>
    )
}

export default withRouter(PublicProfile)