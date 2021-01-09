const ToDosReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return {
        ...state,
        todos: action.payload
      }
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo._id === action.payload._id ? action.payload : todo
        })
      }
    default:
      return state
  }
}

export default ToDosReducer
