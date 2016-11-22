import React from "react";
import { connect } from "react-redux";

import { deleteTodo } from "../actions/todoActions";

@connect((store) => {
  return {
    todos: store.todo
  };
})
export default class ListTodos extends React.Component {
  delTodo(id) {
    //console.log(id);
    this.props.dispatch(deleteTodo(id));
  }

  render() {
    const mappedTodos = this.props.todos.map(todo => <li key={todo.id}>{todo.text} <button onClick={this.delTodo.bind(this, todo.id)}>x</button></li>);

    return <div>
      <ul>
        {mappedTodos}
      </ul>
    </div>
  }
}
