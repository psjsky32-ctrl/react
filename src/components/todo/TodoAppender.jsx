import { memo, useRef, useState } from "react";
import { Alert } from "../ui/Modals";
import { fetchAddTodo, fetchTodoList } from "../../http/todo/fetchTodo";
import { useDispatch } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice";

const TodoAppender = memo(() => {
  console.log("TodoAppender 시작");

  const [isFetching, setIsFetching] = useState(false);

  //Component Rendering을 Delay
  // for (let i = 1; i < 100_000; i++) {
  //   console.log(i);
  // }

  const todoRef = useRef();
  const dateRef = useRef();
  const priorityRef = useRef();
  const alertRef = useRef();
  const reactReduxDispatcher = useDispatch();

  const onSaveButtonClickHandler = async () => {
    if (!todoRef.current.value) {
      alertRef.current.showModal("할일을 적어주세요");
      return;
    }
    if (!dateRef.current.value) {
      alertRef.current.showModal("날짜를 적어주세요");
      return;
    }
    if (!priorityRef.current.value) {
      alertRef.current.showModal("우선순위를 적어주세요");
      return;
    }
    setIsFetching(true);
    const addResult = await fetchAddTodo(
      todoRef.current.value,
      dateRef.current.value,
      priorityRef.current.value,
    );
    setIsFetching(false);
    if (addResult.errors) {
      alert(addResult.errors);
    }
    const fetchResult = await fetchTodoList();

    reactReduxDispatcher(todoAction.refresh(fetchResult.body));

    todoRef.current.value = "";
    dateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <footer>
      <Alert dialogRef={alertRef} />
      <input type="text" placeholder="Task" ref={todoRef} />
      <input type="date" ref={dateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button
        type="button"
        disabled={isFetching}
        onClick={onSaveButtonClickHandler}
      >
        {isFetching ? "저장중.." : "저장"}
      </button>
    </footer>
  );
});
export default TodoAppender;
