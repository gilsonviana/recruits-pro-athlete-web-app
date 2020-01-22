import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
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
          <LoginPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <ProtectedRoute path="/choose-plan" exact>
          <PricingPage />
        </ProtectedRoute>
        <ProtectedRoute path="/process-payment">
          <ProcessPayment />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default connect(null, { getSubscriptionPlans })(App);
