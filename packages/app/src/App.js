import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';

import GraphViewer from './Components/GraphViewer';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={GraphViewer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
