export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime(),
      text
    }
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
