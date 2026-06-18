import { memo, useContext, useRef } from "react";
import { Confirm } from "../ui/Modals";
import TodoContext from "./contexts/TodoContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoneTodo, fetchTodoList } from "../../http/todo/fetchTodo";
import { todoAction } from "../../stores/toolkit/slices/todoSlice";

const TodoHeader = memo(() => {
  const checkboxRef = useRef();
  const confirmRef = useRef();

  const { list: todoList } = useSelector((store) => store.todo);
  const count = {
    all: todoList.length,
    //완료된 todo만 찾아 그 갯수를 반환
    done: todoList.filter((todo) => todo.done).length,
    //완료 안된 todo만 찾아 그 갯수를 반환.
    process: todoList.filter((todo) => !todo.done).length,
  };

  const reactReduxDispatcher = useDispatch();

  const { componentName } = useContext(TodoContext);

  console.log("TodoHeader" + "시작");

  if (!componentName || componentName !== "TodoGrid") {
    return <></>;
  }

  const onAllDoneChangeHandler = () => {
    const checked = checkboxRef.current.checked;
    let message = "";
    if (checked) {
      message = "'완료'하시겠습니까?";
    } else {
      message = "'미완료'하시겠습니까?";
    }
    confirmRef.current.showModal(message);
  };

  const onCofirmOkClickHandler = async () => {
    // all done 에 대한 낙관적 업데이트 진행
    // 사용자가 all done을 요청했을 때, 요청 결과와 상관 없이 우선 all done 이 된 것 처럼 보여준다
    // fetch 이후에 실패했을 경우, 원래 상태로 돌려준다.
    //              성공했을 경우, 변경된 상태 유지
    //               all done을 수행하는 중에 다른 사용자로 인해 데이터가 추가됐다면 불러올 필요.
    reactReduxDispatcher(todoAction.allDone);

    const allDoneResult = await fetchAllDoneTodo();
    if (allDoneResult.errors) {
      alert(allDoneResult.errors);
    }
    const fetchResult = await fetchTodoList();
    reactReduxDispatcher(todoAction.refresh(fetchResult.body));
  };
  const onCofirmCloseClickHandler = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  };
  // if(!count.all === count.done){}
  return (
    <>
      <li className="tasks-counter">
        <div>전체: {count.all}</div>
        <div>진행중: {count.process}</div>
        <div>완료: {count.done}</div>
      </li>
      <li className="tasks-header">
        <Confirm
          dialogRef={confirmRef}
          onOkClick={onCofirmOkClickHandler}
          onCloseClick={onCofirmCloseClickHandler}
        />
        <input
          type="checkbox"
          id="checkall"
          ref={checkboxRef}
          onChange={onAllDoneChangeHandler}
        />
        <label>Task</label>
        <span className="due-date">Due date</span>
        <span className="priority">Priority</span>
      </li>
    </>
  );
});
export default TodoHeader;
