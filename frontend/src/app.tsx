import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ExampleDetailsPage from './pages/example-details/lazy';
import ExampleHomePage from './pages/example-home/lazy';
import ExampleSearchPage from './pages/example-search/lazy';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ExampleHomePage />
        </Route>
        <Route path="/example-search">
          <ExampleSearchPage />
        </Route>
        <Route path="/example-details/:id">
          <ExampleDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}