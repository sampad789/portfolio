import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Background from "./Components/Background/Background";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <div className="split-background">
              <Link to={"/"}>
                <Background />
              </Link>
            </div>

            <main className="split-container">
              <Menu />
              <Switch>
                <Route exact path="/" component={Banner} />
                <Route exact path="/about" component={About} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
