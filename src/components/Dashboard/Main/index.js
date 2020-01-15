import React from 'react'

import './style.css'

const Main = props => {
    return (
        <main className="app__main">
            <div className="wrapper">
                <div className="page">
                    <div className="page__inner">
                        <header className="page__title__bar">
                            <div className="d-flex flex-column flex-md-row">
                                <p className="lead">
                                    <span className="font-weight-bold">Hi, Beni.</span> 
                                    <span className="d-block text-muted">
                                        4 days since your last evaluation.
                                    </span>
                                </p>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main