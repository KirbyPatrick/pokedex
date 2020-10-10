import React from "react";
import "./App.css";
//import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CardList from "./components/cards/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer className="page-footer" />
      <CardList />
    </div>
  );
}

export default App;
