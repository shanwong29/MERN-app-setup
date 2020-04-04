import React, { Component, Fragment } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    visitors: [],
  };

  componentDidMount() {
    const apiUrl = `http://localhost:5000`;
    axios
      .get(`${apiUrl}/api/toDoItems`)
      .then((res) => console.log("rees", res));
  }

  render() {
    return (
      <div>
        <h1>My MERN App</h1>
      </div>
    );
  }
}
