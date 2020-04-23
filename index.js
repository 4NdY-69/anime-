import React, { Component } from "react";
import { render } from "react-dom";
import Nav from "./Components/nav/App";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
