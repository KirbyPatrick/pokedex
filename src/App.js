import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//import components
import Header from "./components/layout/Header";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/cards/Pokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
