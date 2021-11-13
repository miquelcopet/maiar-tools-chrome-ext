import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import BootWithdraw from "../Screens/BootWithdraw/BootWithdraw";
import MainScreen from "../Screens/MainScreen/MainScreen";
import history from "./history";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/boot-withdraw" component={BootWithdraw} />
      </Switch>
    </Router>
  );
}
