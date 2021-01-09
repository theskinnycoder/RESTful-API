import { createContext, useReducer } from "react"
import ToDosReducer from "../reducers/ToDosReducer"

export const ToDosContext = createContext()

const ToDosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToDosReducer, {})

  const fetchToDos = async () => {
    const res = await fetch("/api/todos/")
    const { allToDos } = await res.json()

    dispatch({
      type: "FETCH_TODO",
      payload: allToDos
    })
  }

  const addToDo = async text => {
    const res = await fetch("/api/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
    const { newToDo } = await res.json()

    dispatch({
      type: "ADD_TODO",
      payload: newToDo
    })
  }

  const removeToDo = async id => {
    const res = await fetch(`/api/todos/${id}/`, {
      method: "DELETE"
    })
    const { deletedToDoID } = await res.json()

    dispatch({
      type: "DELETE_TODO",
      payload: deletedToDoID
    })
  }

  const updateToDo = async id => {
    const res = await fetch(`/api/todos/${id}/`, {
      method: "PATCH"
    })
    const { requiredToDo } = await res.json()

    dispatch({
      type: "UPDATE_TODO",
      payload: requiredToDo
    })
  }

  return (
    <ToDosContext.Provider
      value={{
        todos: state.todos,
        fetchToDos,
        addToDo,
        removeToDo,
        updateToDo
      }}
    >
      {children}
    </ToDosContext.Provider>
  )
}

export default ToDosContextProvider
