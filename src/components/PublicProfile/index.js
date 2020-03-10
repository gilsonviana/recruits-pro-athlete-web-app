// Dependencies
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

// Service
import { getAthleteByName } from '../../services/user'

// Components
// import PublicProfileNavbar from './PublicProfileNavbar'
import Navbar from '../Dashboard/Header'
import PublicProfile404 from './PublicProfile404'
import PublicProfileListing from './PublicProfileListing'


const PublicProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [athleteList, setAthleteList] = useState([])
    const [show404, setShow404] = useState(false)

    const { search } = useLocation()

    useEffect(() => {
        const getAthletes = async () => {
            setIsLoading(true)

            const res = await getAthleteByName(search)

            setIsLoading(false)

            if (res.length > 0) {
                setShow404(false)
                setAthleteList([...res])
                return
            }

            setShow404(true)
        }

        getAthletes()
    }, [search])

    if (isLoading) {
        return (
            <div className="page__public-profile">
                <Navbar />
                <div 
                    style={{
                        height: `100vh`, 
                        width: `100%`,
                        display: 'flex', 
                        alignItems: `center`, 
                        justifyContent: `center`, 
                        flexDirection: 'column'
                    }}
                >
                    <div className="mb-4">
                        <Skeleton width={600} height={125} />
                    </div>
                    <Skeleton width={400} height={65} />
                    <Skeleton width={400} height={65} />
                </div>
            </div>
        )
    }
    return (
        <div className="page__public-profile">
            <Navbar />
            {show404 ? <PublicProfile404 /> : <PublicProfileListing athletes={athleteList} />}
        </div>
    )
}

export default PublicProfile