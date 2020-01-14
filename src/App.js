import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {/* <LoginPage /> */}
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
