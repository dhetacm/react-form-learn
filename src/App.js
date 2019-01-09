import React, { Component } from "react";
import Register from "./Register";
import TodoApp from "./TodoApp";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Let's create a React Form</h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;
