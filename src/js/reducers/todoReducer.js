export default function todoReducer (state=[], actions) {
  switch (actions.type) {
    case "ADD_TODO":
    state = [...state, actions.payload];
    break;

    case "DELETE_TODO":
    state = state.filter(todo => todo.id !== actions.payload);
    break;
  }
  return state;
}
