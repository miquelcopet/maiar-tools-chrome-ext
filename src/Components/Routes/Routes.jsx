import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import AprCalculator from "../Screens/AprCalculator/AprCalculator";
import BootWithdraw from "../Screens/BootWithdraw/BootWithdraw";
import DenverRestake from "../Screens/DenverRestake/DenverRestake";
import MainScreen from "../Screens/MainScreen/MainScreen";
import history from "./history";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/boot-withdraw" component={BootWithdraw} />
        <Route exact path="/denver-restake" component={DenverRestake} />
        <Route exact path="/apr-calculator" component={AprCalculator} />
      </Switch>
    </Router>
  );
}
