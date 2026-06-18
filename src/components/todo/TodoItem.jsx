import { useContext, useRef } from "react";
import { Confirm } from "../ui/Modals";
import TodoContext from "./contexts/TodoContext";
import { fetchDoneTodo, fetchTodoList } from "../../http/todo/fetchTodo";
import { useDispatch } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice";

const TodoItem = ({ todo }) => {
  const checkboxRef = useRef();
  const confirmRef = useRef();

  const reactReduxDispatcher = useDispatch();

  const priorities = ["없음", "높음", "보통", "낮음"];

  const { componentName } = useContext(TodoContext);

  console.log("TodoItem");

  if (!componentName || componentName !== "TodoList") {
    return <></>;
  }

  const { id, task: todoTask, dueDate, priority } = todo;

  const doneClass = todo.done ? "done" : "";

  const onDoneChangeHandler = () => {
    const checked = checkboxRef.current.checked;
    let message = "";
    if (checked) {
      message = todoTask + "'완료'하시겠습니까?";
    } else {
      message = todoTask + "'미완료'하시겠습니까?";
    }
    confirmRef.current.showModal(message);
  };

  const onCofirmOkClickHandler = async () => {
    reactReduxDispatcher(todoAction.doneItem(id));

    const doneResult = await fetchDoneTodo(id);

    if (doneResult.errors) {
      alert(doneResult.errors);
    }

    const fetchResult = await fetchTodoList();
    reactReduxDispatcher(todoAction.refresh(fetchResult.body));
  };

  const onCofirmCloseClickHandler = () => {
    // onDoneChange(todo.id, todo.isDone);
    checkboxRef.current.checked = todo.done;
  };
  return (
    <li className="task-item">
      <Confirm
        dialogRef={confirmRef}
        onOkClick={onCofirmOkClickHandler}
        onCloseClick={onCofirmCloseClickHandler}
      />
      <input
        id={id}
        type="checkbox"
        checked={todo.done}
        ref={checkboxRef}
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
