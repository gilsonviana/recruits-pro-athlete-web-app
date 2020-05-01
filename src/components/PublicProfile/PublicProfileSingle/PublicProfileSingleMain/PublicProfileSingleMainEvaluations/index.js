// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import PublicProfileSingleMainEvaluationsItem from './PublicProfileSingleMainEvaluationsItem'

// Assets
import './style.css'
import noEvaluationsImage from '../../../../../assets/images/form.png'

const PublicProfileSingleMainEvaluations = ({ evaluations, subscriptionStatus }) => {
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
                {evaluations.length > 0 && <PublicProfileSingleMainEvaluationsItem evaluation={evaluations[0]}/>}
            </div>
        )
    }

    return (
        <div className="public-profile__single-main__evaluations">
            {
                evaluations.map((evaluation, i) => <PublicProfileSingleMainEvaluationsItem key={i} evaluation={evaluation}/>)
            }
        </div>
    )
}

PublicProfileSingleMainEvaluations.propTypes = {
    evaluations: PropTypes.array.isRequired,
    subscriptionStatus: PropTypes.string.isRequired
}

export default PublicProfileSingleMainEvaluations