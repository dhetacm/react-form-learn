import React, { Component } from "react";

class TodoApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form>
          <input type="text" placeholder="Anything to do ?" />
          <input type="submit" value="Add to do" />
        </form>
      </div>
    );
  }
}

export default TodoApp;
