import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';
import SignupPage from './components/SignupPage';
import PricingPage from './components/PricingPage';
import ProcessPayment from './components/ProcessPayment';

import { getSubscriptionPlans } from './store/subscriptionPlans/actions'

function App({
  getSubscriptionPlans
}) {
  getSubscriptionPlans()
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* <LoginPage /> */}
          <PricingPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/choose-plan" exact>
          <PricingPage />
        </Route>
        <Route path="/process-payment">
          <ProcessPayment />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default connect(null, { getSubscriptionPlans })(App);
