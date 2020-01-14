import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
