import React from "react";
import "./App.css";
//import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Card from "./components/cards/Card";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <p>cards placeholder</p>
      </div>
      <Footer className="page-footer" />
      <Card />
      <NavBar />
    </div>
  );
}

export default App;
