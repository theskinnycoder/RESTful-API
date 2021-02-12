import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"

import connectDB from "./config/connectDB.js"
import toDoRoutes from "./routes/toDoRoutes.js"

// DotENV Module Config
dotenv.config()

// Extract the required variables
const { PORT, NODE_ENV } = process.env

// Main Async IIFE
;(async () => {
  // Connect to the DataBase
  await connectDB()

  // Initialise the Express Web-App Instance
  const app = express()

  // Express Middlewares for Body-Parser, JSON, and Logging
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  if (NODE_ENV === "development") app.use(morgan("dev"))

  // Primary Route Hitters
  // Forward all URLs from /api/todo to toDo controllers
  app.use("/api/todos", toDoRoutes)

  // Listen for requests
  app.listen(
    PORT,
    console.log(
      `Server up and running in ${NODE_ENV} mode and is listening for requests on http://localhost:${PORT}/`
    )
  )
})()
