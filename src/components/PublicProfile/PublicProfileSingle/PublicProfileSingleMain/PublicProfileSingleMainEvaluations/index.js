// Dependencies
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import PublicProfileSingleMainEvaluationsItem from './PublicProfileSingleMainEvaluationsItem'
import PublicProfileSingleMainVideoEvaluationsItem from './PublicProfileSingleMainVideoEvaluationsItem'

// Assets
import './style.css'
import noEvaluationsImage from '../../../../../assets/images/form.png'

const PublicProfileSingleMainEvaluations = ({ evaluations, videoEvaluations, subscriptionStatus }) => {
    const [evaluationsState, setEvaluationsState] = useState()

    useEffect(() => {
        setEvaluationsState([
            ...evaluations,
            ...videoEvaluations
        ])
    }, [evaluations, videoEvaluations])
    
    const isSubscriber = subscriptionStatus === 'ACTIVE' ? true : false

    if (evaluations.length === 0) {
        return (
            <div className="public-profile__single-main__evaluations text-center" style={{margin: `auto`}}>
                <img src={noEvaluationsImage} style={{width: 'auto', height: `120px`, margin: 'auto'}} alt="no videos available"/>
                <h5 className="text-muted mt-4">No evaluations yet</h5>
            </div>
        )
    }

    if (!isSubscriber) {
        return (
            <div className="public-profile__single-main__evaluations">
                {evaluations.length > 0 && <PublicProfileSingleMainEvaluationsItem evaluation={evaluations[evaluations.length - 1]}/>}
            </div>
        )
    }

    return (
        <div className="public-profile__single-main__evaluations">
            {
                evaluationsState.sort((a, b) => {
                    let x = new Date(b.createdAt), 
                        y = new Date(a.createdAt)
                    return y > x ? - 1 : y < x ? 1 : 0
                }).map((evaluation, i) => {
                    if (evaluation.videoUrl !== undefined) {
                        return <PublicProfileSingleMainVideoEvaluationsItem key={i} evaluation={evaluation}/>
                    }
                    return <PublicProfileSingleMainEvaluationsItem key={i} evaluation={evaluation}/>
                })
            }
        </div>
    )
}

PublicProfileSingleMainEvaluations.propTypes = {
    evaluations: PropTypes.array.isRequired,
    videoEvaluations: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired
}

export default PublicProfileSingleMainEvaluations