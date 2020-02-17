// Dependencies
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Overview from './Overview'
import EvaluationDetails from './EvaluationDetails'
import EvaluationListing from './EvaluationListing'

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
                            <Route path={`/dashboard/profile`} exact>
                                <p>profile</p>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main