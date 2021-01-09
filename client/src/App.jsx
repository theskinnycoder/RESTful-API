import AddToDo from "./components/AddToDo"
import ToDoList from "./components/ToDoList"
import ToDosContextProvider from "./contexts/ToDosContext"

const App = () => {
  return (
    <ToDosContextProvider>
      <AddToDo />
      <ToDoList />
    </ToDosContextProvider>
  )
}

export default App
