import React from "react";
import "./App.css";
//import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App boxy">
      <Header />
      <div>
        <p>cards placeholder</p>
      </div>
      <Footer className="page-footer" />
    </div>
  );
}

export default App;
