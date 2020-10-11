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

      <CardList />
      {/* <Footer className="page-footer" /> */}
    </div>
  );
}

export default App;
