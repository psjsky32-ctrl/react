// ecma function (fat arrow function)
// const 상수 정의 키워드
// (parameter) => {function body} : fat arrow function
// const abc = () => {};

import { useEffect } from "react";
import { StateTest } from "./StateTest.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoGrid from "./TodoGrid.jsx";
import AddCalculator from "./AddCalculator.jsx";
import { fetchTodoList } from "../../http/todo/fetchTodo.js";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice.js";

// function과 fat arrow function의 기능적 차이
// function = 함수를 호출한 대상을 this 객체로 알 수 있다.
// fat arrow function = this 키워드 사용불가
// event 파라미터로만 알 수 있음

// export default 이후에 const 키워드가 나타날 수 없음
// export default const > export const
const TodoMain = () => {
  console.log("TodoMain");

  // const [cachedData, setCachedDate] = useState([]);
  // ReactRedux Store에서 todo state를 가져온다.
  const { list: todoList } = useSelector((store) => store.todo);
  // 가지고온 todo state의 state를 변경한다.
  const storeDispatcher = useDispatch();

  const refreshTodoList = async () => {
    const fetchResult = await fetchTodoList();
    // setCachedDate(fetchResult.body);

    //reducer호출
    storeDispatcher(todoAction.refresh(fetchResult.body));

    if (fetchResult.errors) {
      alert(fetchResult.errors);
    }
  };
  useEffect(() => {
    refreshTodoList();
  }, []);

  // 특정 todo의 isDone의 값을 반전시키는 함수.
  // 이 함수를 TodoList에게 props로 전달.
  // TodoList는 TodoItem에게 함수를 props 전달.

  // 컴포넌트가 만들어 줄 HTML tag set를 반환
  return (
    <div className="wrapper">
      {/* <StateTest /> */}
      <header>React Todo</header>
      <TodoGrid>
        <TodoHeader />
        <TodoList>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
            // <TodoItemForChildren>
            //   <input type="checkbox" id={todo.id} />
            //   <label htmlFor={todo.id}>{todo.todo}</label>
            //   <span className="due-date">{todo.dueDate}</span>
            //   <span className="priority">{priorities[todo.priority]}</span>
            // </TodoItemForChildren>
          ))}
        </TodoList>
      </TodoGrid>
      <TodoAppender />
    </div>
  );
};

export default TodoMain;
