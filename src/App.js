import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
