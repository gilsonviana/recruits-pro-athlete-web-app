// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Overview from './Overview'
import EvaluationDetails from './EvaluationDetails'
import VideoEvaluationDetails from './VideoEvaluationDetails'
import EvaluationListing from './EvaluationListing'
import Profile from './Profile'

// Assets
import './style.css'
import Videos from './Videos'
import Workouts from './Workouts'

const Main = () => {
    return (
        <main className="app__main">
            <div className="wrapper">
                <div className="page">
                    <div className="page__inner mt-4 mt-md-0">
                        <Switch>
                            <Route path={`/dashboard`} exact>
                                <Overview />
                            </Route>
                            <Route path={`/dashboard/evaluations`} exact>
                                <EvaluationListing />
                            </Route>
                            <Route path={`/dashboard/evaluation/:evaluationId`} exact>
                                <EvaluationDetails />
                            </Route>
                            <Route path={`/dashboard/video-evaluation/:evaluationId`} exact>
                                <VideoEvaluationDetails />
                            </Route>
                            <Route path={`/dashboard/profile`}>
                                <Profile />
                            </Route>
                            <Route path={`/dashboard/videos`}>
                                <Videos />
                            </Route>
                            <Route path={`/dashboard/workouts`}>
                                <Workouts />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main