// Dependencies
import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

// Service
import { getAthletePublicProfile } from '../../../services/user'

// Components
import Navbar from '../../Dashboard/Header'
import PublicProfileSingleHeader from './PublicProfileSingleHeader'
import PublicProfileSingleAside from './PublicProfileSingleAside'
import PublicProfileSingleMain from './PublicProfileSingleMain'

const PublicProfileSingle = ({ history }) => {
    const [profile, setProfile] = useState({
        personal: {
            avatarUrl: '',
            coverImgUrl: '',
            fullName: '',
            height: {
                feet: '',
                inches: ''
            },
            weight: '',
            references: {
                first: {
                    email: '',
                    name: ''
                },
                second: {
                    email: '',
                    name: ''
                },
                third: {
                    email: '',
                    name: ''
                }
            }
        },
        education: {
            graduated: false,
            gpa: '',
            graduationYear: '',
            schoolName: ''
        },
        subscription: {
            status: ''
        },
        events: [],
        evaluations: [],
        videoEvaluations: [],
        social: {
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: ''
        },
        location: {
            country: '',
            zipcode: '',
            state: '',
            city: ''
        },
        sports: {
            primary: {
                positions: [],
                name: ''
            },
            secondary: {
                positions: [],
                name: ''
            },
        },
        videos: []
    })

    const { profileId } = useParams()

    useEffect(() => {
        const fetchUserById = async () => {
            try {
                const res = await getAthletePublicProfile(profileId)
                setProfile({
                    ...profile,
                    ...res.athlete
                })
            } catch (e) {
                history.push('/dashboard')
            }
        }
        fetchUserById()
    }, [profileId])

    return (
        <div className="page__public-profile-single">
            <Navbar />
            <PublicProfileSingleHeader 
                coverImgUrl={profile.personal.coverImgUrl}
                socialNetworks={profile.social}
                />
            <PublicProfileSingleAside 
                avatarUrl={profile.personal.avatarUrl}
                fullName={profile.personal.fullName}
                subscriptionStatus={profile.subscription.status}
                events={profile.events}
                evaluations={profile.evaluations}
                socialNetworks={profile.social}
                />
            <PublicProfileSingleMain profile={profile} subscriptionStatus={profile.subscription.status}/>
        </div>
    )
}

PublicProfileSingle.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withRouter(PublicProfileSingle)