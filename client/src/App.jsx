import { useEffect, useState } from "react"
import AddToDo from "./components/AddToDo"
import ToDoList from "./components/ToDoList"

const App = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/todos/")
      const { allToDos } = await res.json()
      setTodos(allToDos)
    })()
  }, [])

  const updateToDos = updatedToDo => {
    setTodos(
      todos.map(todo => {
        return todo._id === updatedToDo._id ? updatedToDo : todo
      })
    )
  }

  const deleteToDo = id => {
    setTodos(todos.filter(todo => todo._id === id))
  }

  const addToDo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <AddToDo addToDo={addToDo} />
      <ToDoList
        todos={todos}
        updateToDos={updateToDos}
        deleteToDo={deleteToDo}
      />
    </>
  )
}

export default App
