/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { ToDosContext } from "../contexts/ToDosContext"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
  const { todos, fetchToDos } = useContext(ToDosContext)

  useEffect(() => {
    ;(async () => {
      await fetchToDos()
    })()
  }, [])

  return (
    <ul className="container my-4">
      {todos && todos.map(todo => <ToDoItem key={todo._id} todo={todo} />)}
    </ul>
  )
}

export default ToDoList
