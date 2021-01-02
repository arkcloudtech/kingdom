import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainGatePassage from "./components/main-gate-passage.component";
import CreateKingsGuard from "./components/create-guard.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/kingdom" className="navbar-brand">
            Enter the Kingdom
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/maingate"} className="nav-link">
                Main Gate
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/kingsguard"} className="nav-link">
                Kings Guard
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/kingdom"]} component={MainGatePassage} />
            <Route exact path="/kingsguard" component={CreateKingsGuard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;