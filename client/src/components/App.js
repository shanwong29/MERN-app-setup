import React, { Component, Fragment } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    allTodo: [],
    newToDoItem: "",
  };

  componentDidMount() {
    const apiUrl = `http://localhost:5000`;
    axios
      .get(`${apiUrl}/api/toDoItems`)
      .then((res) => this.setState({ allTodo: res.data }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addToDo = (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:5000`;

    axios
      .post(`${apiUrl}/api/toDoItems`, { toDo: this.state.newToDoItem })
      .then((res) =>
        this.setState({
          allTodo: res.data,
        })
      );
  };

  render() {
    return (
      <div>
        <h1>My MERN App</h1>
        {[...this.state.allTodo].map((el, i) => {
          return <p key={i}>{el.toDo}</p>;
        })}
        <form onSubmit={this.addToDo}>
          <input
            type="text"
            id="newToDoItem"
            name="newToDoItem"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
