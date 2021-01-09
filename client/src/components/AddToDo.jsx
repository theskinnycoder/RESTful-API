import { useContext, useState } from "react"
import { ToDosContext } from "../contexts/ToDosContext"

const AddToDo = () => {
  const [text, setText] = useState("")

  const { addToDo } = useContext(ToDosContext)

  const submitHandler = async e => {
    e.preventDefault()
    addToDo(text)
    setText("")
  }

  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <i className="fas fa-list-alt h1 mr-2"></i>
          <h1>ToDo List App</h1>
        </a>
        <form className="form-inline" onSubmit={submitHandler}>
          <input
            className="form-control"
            type="text"
            value={text}
            placeholder="Add a ToDo..."
            onChange={e => setText(e.target.value)}
            required
          />
          <button className="btn btn-success ml-2" type="submit">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </form>
      </div>
    </nav>
  )
}

export default AddToDo
