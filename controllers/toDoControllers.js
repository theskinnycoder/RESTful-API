import ToDo from "../models/ToDo.js"

// GET    /api/todos/
export const getAllToDos = async (_, res) => {
  const allToDos = await ToDo.find()
  res.json({ allToDos })
}

// GET    /api/todos/:id/
export const getToDoByID = async (req, res) => {
  const requiredToDo = await ToDo.findById(req.params.id)

  if (!requiredToDo) {
    res.status(404).json({ error: "No ToDo Found!" })
  } else {
    res.json({ requiredToDo })
  }
}

// POST    /api/todos/
export const createToDo = async (req, res) => {
  const newToDo = await ToDo.create(req.body)

  res.status(201).json({ newToDo })
}

// PATCH    /api/todos/:id/
export const updateToDoByID = async (req, res) => {
  const requiredToDo = await ToDo.findById(req.params.id)

  if (!requiredToDo) {
    res.status(404).json({ error: "No ToDo Found!" })
  } else {
    requiredToDo.isCompleted = !requiredToDo.isCompleted
    await requiredToDo.save()
    res.json({ requiredToDo })
  }
}

// DELETE    /api/todos/:id/
export const deleteToDoByID = async (req, res) => {
  const deletedToDo = await ToDo.findByIdAndDelete(req.params.id)

  if (!deletedToDo) {
    res.status(404).json({ error: "No ToDo Found!" })
  } else {
    res.json({ deletedToDoID: deletedToDo.id })
  }
}
