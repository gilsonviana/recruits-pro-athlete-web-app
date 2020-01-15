import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Main from './Main'

const Dashboard = () => {
    return (
        <div className="app">
            <Header />
            <Aside />
            <Main />
        </div>
    )
}
export default Dashboard