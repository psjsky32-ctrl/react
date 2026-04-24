const TodoItem = ({ todo, priorities, onDoneChange }) => {
  const { id, todo: todoTask, dueDate, priority } = todo;

  const doneClass = todo.isDone ? "done" : "";

  const onDoneChangeHandler = () => {
    onDoneChange(todo.id, !todo.isDone);
  };
  return (
    <li className="task-item">
      <input
        id={id}
        type="checkbox"
        checked={todo.isDone}
        onChange={onDoneChangeHandler}
      />
      <label className={doneClass} htmlFor={id}>
        {todoTask}
      </label>
      <span className={`due-date ${doneClass}`}>{dueDate}</span>
      <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
    </li>
  );
};
export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li className="task-item">{children}</li>;
};
