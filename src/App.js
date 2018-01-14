import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoccountTableContainer from "./loccount/LoccountTableContainer";
import LoccountFilterContainer from "./loccount/LoccountFilterContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        </p>
        <LoccountFilterContainer />
        <LoccountTableContainer />

      </div>
    );
  }
}

export default App;
