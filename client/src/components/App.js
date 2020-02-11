import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    somedata: []
  };

  componentDidMount() {
    axios
      .get("/api/somedata")
      .then(res => console.log(res))
      .then(result =>
        this.setState({ somedata: result }, () => {
          console.log(this.state.somedata);
        })
      );
  }

  render() {
    return (
      <div>
        <h1>My MERN App</h1>
      </div>
    );
  }
}
