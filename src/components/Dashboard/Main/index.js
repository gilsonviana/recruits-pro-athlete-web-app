// Dependecies
// TODO remove useState and useEffect once API is working. Use redux to pass down props to children elements
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Overview from './Overview'

const Main = (props) => {
    const [overviewProps, setOverviewProps] = useState({})

    useEffect(() => {
        const setOverview = () => {
            setOverviewProps({
                athleteName: 'Chris Sam',
                evaluationsNumber: 4,
                eventsNumber: 6,
                videosNumber: 2,
                lastEvaluation: {
                    evaluatorName: 'Tim Sam',
                    date: '2020-01-27T12:08:00.743Z'
                }
            })
        }

        setTimeout(() => setOverview(), 2000)
    }, [])

    return (
        <main className="app__main">
            <div className="wrapper">
                <div className="page">
                    <div className="page__inner">
                        <Router>
                            <Switch>
                                <Route path="/dashboard/" exact>
                                    <Overview data={overviewProps}/>
                                    {/* {(!overviewProps) ? 'loading...' : 
                                    <Overview data={overviewProps}/>
                                    
                                    } */}
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main