const ToDoItem = ({ todo, updateToDos, deleteToDo }) => {
  const { _id, text, isCompleted } = todo;

  const updateHandler = async () => {
    const res = await fetch(`/api/todos/${_id}/`, {
      method: 'PATCH'
    });
    const { requiredToDo } = await res.json();
    updateToDos(requiredToDo);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/todos/${_id}/`, {
      method: 'DELETE'
    });
    const { deletedToDoID } = await res.json();
    deleteToDo(deletedToDoID);
  };

  return (
    <li className='w-75 m-auto p-2 d-flex align-items-center justify-content-center border-0 border-white rounded shadow'>
      <h3
        className='flex-grow-1'
        style={{ textDecoration: isCompleted ? 'line-through' : '' }}
      >
        {text}
      </h3>
      <button className='btn btn-warning mr-2' onClick={updateHandler}>
        <i className='far fa-check-circle'></i>
      </button>
      <button className='btn btn-danger ml-2' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default ToDoItem;
