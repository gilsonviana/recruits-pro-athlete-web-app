// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import moment from 'moment'

const OverviewWelcome = ({ name, evaluations }) => {
    const userName = name.split(' ')[0]
    const lastEvaluation = evaluations[evaluations.length - 1]
    const date = (lastEvaluation) ? lastEvaluation.createdAt : ''
    return (
        <header className="page__title__bar">
            <div className="d-flex flex-column flex-md-row">
                <p className="lead">
                    <span className="font-weight-bold">Hi, {userName || <Skeleton width={100} />}.</span> 
                    {
                        (evaluations.length === 0 || !date) ? 
                        <span className="d-block text-muted">
                            You don't have any evaluations yet.
                        </span> :
                        <span className="d-block text-muted">
                            {
                                (!date) ?
                                    <Skeleton /> :
                                    `${moment(date).fromNow().slice(0, moment(date).fromNow().length - 4)} since your last evaluation.`
                            }
                        </span>
                    }
                </p>
            </div>
        </header>
    )
}

OverviewWelcome.propTypes = {
    name: PropTypes.string.isRequired,
    evaluations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    name: state.profile.personal.fullName,
    evaluations: state.profile.evaluations
})

export default connect(mapStateToProps)(OverviewWelcome)