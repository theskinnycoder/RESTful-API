import express from "express"
import {
  createToDo,
  deleteToDoByID,
  getAllToDos,
  getToDoByID,
  updateToDoByID
} from "../controllers/toDoControllers.js"

const router = express.Router()

router.route("/").get(getAllToDos).post(createToDo)

router
  .route("/:id/")
  .get(getToDoByID)
  .patch(updateToDoByID)
  .delete(deleteToDoByID)

export default router
