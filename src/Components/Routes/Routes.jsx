import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import MainScreen from "../Screens/MainScreen/MainScreen";
import history from "./history";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainScreen} />
      </Switch>
    </Router>
  );
}
