import { useContext } from "react"
import { ToDosContext } from "../contexts/ToDosContext"

const ToDoItem = ({ todo }) => {
  const { _id, text, isCompleted } = todo

  const { updateToDo, removeToDo } = useContext(ToDosContext)

  return (
    <li className="w-75 mt-4 mx-auto p-2 d-flex align-items-center justify-content-center border-0 border-white rounded shadow">
      <h3
        className="flex-grow-1"
        style={{ textDecoration: isCompleted ? "line-through" : "" }}
      >
        {text}
      </h3>
      <button className="btn btn-warning mr-2" onClick={() => updateToDo(_id)}>
        <i className="far fa-check-circle"></i>
      </button>
      <button className="btn btn-danger ml-2" onClick={() => removeToDo(_id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default ToDoItem
