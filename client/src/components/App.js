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

  deleteItem = (id) => {
    const apiUrl = `http://localhost:5000`;
    axios.delete(`${apiUrl}/api/toDoItems`, { data: { id } }).then((res) => {
      this.setState({ allTodo: res.data });
    });
  };

  addToDo = (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:5000`;

    axios
      .post(`${apiUrl}/api/toDoItems`, { toDo: this.state.newToDoItem })
      .then((res) =>
        this.setState({
          allTodo: res.data,
          newToDoItem: "",
        })
      );
  };

  render() {
    return (
      <div>
        <h1>My MERN App</h1>
        {[...this.state.allTodo].map((el) => {
          return (
            <div key={el._id}>
              <span>{el.toDo} </span>
              <button onClick={() => this.deleteItem(el._id)}>&#10005;</button>
            </div>
          );
        })}
        <form onSubmit={this.addToDo}>
          <input
            type="text"
            id="newToDoItem"
            name="newToDoItem"
            onChange={this.handleChange}
            value={this.state.newToDoItem}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
