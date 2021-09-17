import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ExampleDetailsPage from './example-details/lazy';
import ExampleHomePage from './example-home/lazy';
import ExampleSearchPage from './example-search/lazy';

export default function TestApp(): React.ReactElement {
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
