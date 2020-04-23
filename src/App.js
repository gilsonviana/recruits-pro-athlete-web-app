// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Components
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';
import SignupPage from './components/SignupPage';
import PricingPage from './components/PricingPage';
import ProcessPayment from './components/ProcessPayment';
import CreateProfile from './components/CreateProfile'
import RedirectTo from './components/RedirectTo';
import ResetPassword from './components/ResetPassword';
import ResetPasswordCodeRoute from './components/ResetPasswordCodeRoute';
import ResetPasswordCode from './components/ResetPasswordCode';
import ResetPasswordNewRoute from './components/ResetPasswordNewRoute';
import ResetPasswordNew from './components/ResetPasswordNew';
import PublicProfile from './components/PublicProfile';
import PublicProfileSingle from './components/PublicProfile/PublicProfileSingle';
// import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router basename="/athletes">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
          {/* <LandingPage /> */}
        </Route>
        <Route path="/public" exact>
          <PublicProfile />
        </Route>
        <Route path="/public/:profileId" exact>
          <PublicProfileSingle />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/signup/:userId" exact>
          <SignupPage />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPassword />
        </Route>
        <ResetPasswordCodeRoute path="/reset-password/code" exact>
          <ResetPasswordCode />
        </ResetPasswordCodeRoute>
        <ResetPasswordNewRoute path="/reset-password/new" exact>
          <ResetPasswordNew />
        </ResetPasswordNewRoute>
        <Route path="/redirect" exact>
          <RedirectTo />
        </Route>
        <ProtectedRoute path="/create-profile">
          <CreateProfile />
        </ProtectedRoute>
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

export default App;
