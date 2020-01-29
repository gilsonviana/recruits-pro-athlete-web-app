// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import moment from 'moment'

const OverviewWelcome = ({ athleteName, date }) => {
    return (
        <header className="page__title__bar">
            <div className="d-flex flex-column flex-md-row">
                <p className="lead">
                    <span className="font-weight-bold">Hi, {athleteName || <Skeleton width={100} />}.</span> 
                    <span className="d-block text-muted">
                        {
                            (!date) ?
                                <Skeleton /> :
                                `${moment(date).fromNow().slice(0, moment(date).fromNow().length - 4)} since your last evaluation.`
                        }
                    </span>
                </p>
            </div>
        </header>
    )
}

OverviewWelcome.propTypes = {
    athleteName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default OverviewWelcome