import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, updateToDos, deleteToDo }) => {
  return (
    <>
      <ul className='container my-4'>
        {todos ? (
          todos.map(todo => (
            <ToDoItem
              key={todo._id}
              todo={todo}
              updateToDos={updateToDos}
              deleteToDo={deleteToDo}
            />
          ))
        ) : (
          <h1>The ToDo List is Empty!</h1>
        )}
      </ul>
    </>
  );
};

export default ToDoList;
