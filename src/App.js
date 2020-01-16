import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignupPage />
          {/* <LoginPage /> */}
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
