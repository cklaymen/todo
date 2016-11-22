import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions/todoActions";

@connect()
export default class AddTodo extends React.Component {
  addTodo (e) {
    e.preventDefault();
    const value = document.getElementById("todo_text").value;
    this.props.dispatch(addTodo(value));
  }

  render() {
    return <div>
      <form onSubmit={this.addTodo.bind(this)}>
        <input type="text" id="todo_text" />
      </form>
    </div>
  }
}
