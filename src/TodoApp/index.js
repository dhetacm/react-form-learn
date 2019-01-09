import React, { Component } from "react";

class TodoApp extends Component {
  constructor() {
    super();

    this.setState({
      input: "",
      todos: [
        {
          id: 0,
          text: "Learn to make Todo"
        },
        {
          id: 1,
          text: "Design TodoApp"
        }
      ]
    });
  }

  handleTodoInput = event => {
    this.setState({ nput: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log(this.state.input);
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="Anything to do ?"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input type="submit" value="Add to do" />
        </form>
      </div>
    );
  }
}

export default TodoApp;
