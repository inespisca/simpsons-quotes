import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Work from "./Work";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
        work: true
     }
  };

  handleClick() {
      this.setState({
        work: this.state.work
      }
    )
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          </header>
        <button onClick={(e) => this.handleClick}>Is Homer working?</button>
        <Quotes />
      </div>
    )
  }
};

export default App;