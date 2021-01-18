import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const HoverCard = React.lazy(() => import('./HoverCard'));
const Website = React.lazy(() => import('./Website'));
const BrowseMovies = React.lazy(() => import('./BrowseMovies'));

ReactDOM.render(
  <Router>
    <Suspense fallback={<div className="ui container"><h2>Loading...</h2></div>}>
    <Switch>
      <Route path="/" exact component={HoverCard} />
      <Route path="/todo-app" component={Website} />
      <Route path="/browse-movies" component={BrowseMovies} />
    </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
