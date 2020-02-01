import React from 'react';
import './App.css';
import Home from './containers/Home';
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <div className="App">
      <ResponsiveDrawer>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ResponsiveDrawer>
    </div>
  );
};

export default App;
