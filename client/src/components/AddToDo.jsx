import { useState } from "react"

const AddToDo = ({ addToDo }) => {
  const [text, setText] = useState("")

  const submitHandler = async e => {
    e.preventDefault()
    const res = await fetch("/api/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
    const { newToDo } = await res.json()
    setText("")
    addToDo(newToDo)
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
          <button className="btn btn-outline-success" type="submit">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </form>
      </div>
    </nav>
  )
}

export default AddToDo
