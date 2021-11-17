/*global chrome*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Routes from "./Components/Routes/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
