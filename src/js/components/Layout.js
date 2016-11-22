import React from "react";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

import { addTodo } from "../actions/todoActions";

import "../../css/main.css";

export default class Layout extends React.Component {
  render() {
    return <div>
      <AddTodo />
      <ListTodos />
    </div>
  }
}
