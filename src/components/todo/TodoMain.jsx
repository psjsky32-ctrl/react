// ecma function (fat arrow function)
// const 상수 정의 키워드
// (parameter) => {function body} : fat arrow function
// const abc = () => {};

import { useState } from "react";
import { StateTest } from "./StateTest.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";

// function과 fat arrow function의 기능적 차이
// function = 함수를 호출한 대상을 this 객체로 알 수 있다.
// fat arrow function = this 키워드 사용불가
// event 파라미터로만 알 수 있음

// export default 이후에 const 키워드가 나타날 수 없음
// export default const > export const
const TodoMain = () => {
  //TODO JSON DATA
  const todoDatas = [
    {
      id: "todo_1",
      todo: "React Component Master 1",
      dueDate: "2026-04-22",
      priority: 1,
      isDone: true,
    },
    {
      id: "todo_2",
      todo: "React Component Master 2",
      dueDate: "2026-04-23",
      priority: 2,
      isDone: false,
    },
    {
      id: "todo_3",
      todo: "React Component Master 3",
      dueDate: "2026-04-24",
      priority: 3,
      isDone: false,
    },
  ];

  const [cachedData, setCachedDate] = useState(todoDatas);

  const [{ todo, dueDate, priority }, setNewTodoData] = useState({
    todo: "",
    dueDate: "",
    priority: 0,
  });
  const onAllDoneChangeHandler = (isDone) => {
    setCachedDate((prevData) => {
      // cachedData를 반복하면서 모든 isDone의 값을 변경한다.
      const newData = prevData.map((todo) => ({ ...todo, isDone }));
      // 변경된 결과를 반환한다.
      return newData;
    });
  };

  // 특정 todo의 isDone의 값을 반전시키는 함수.
  // 이 함수를 TodoList에게 props로 전달.
  // TodoList는 TodoItem에게 함수를 props 전달.
  const onDoneChangeHandler = (todoId, isDone) => {
    //cach한 데이터 바꾸기
    setCachedDate((prevData) => {
      const newStateMemory = [...prevData];

      for (const todo of newStateMemory) {
        if (todo.id === todoId) {
          todo.isDone = isDone;
          break;
        }
      }
      //
      return newStateMemory;
    });
    // java for each

    console.log(todoId, todoDatas);
  };

  const onTaskKeyUpHandler = (event) => {
    console.log(event.target.value);
    setNewTodoData((prevData) => ({ ...prevData, todo: event.target.value }));
  };
  const onDateChangeHandler = (event) => {
    console.log(event.target.value);
    setNewTodoData((prevData) => ({
      ...prevData,
      dueDate: event.target.value,
    }));
  };
  const onPrioritySelectChangeHandler = (event) => {
    console.log(event.target.value);
    setNewTodoData((prevData) => ({
      ...prevData,
      priority: parseInt(event.target.value),
    }));
  };
  const onSaveButtonClickHandler = () => {
    console.log("저장합니다.");
    setCachedDate((prevData) => [
      ...prevData,
      { id: prevData.length + 1, todo, dueDate, priority, isDone: false },
    ]);
    setNewTodoData({ todo: "", dueDate: "", priority: 0 });
  };

  // 컴포넌트가 만들어 줄 HTML tag set를 반환
  return (
    <div className="wrapper">
      {/* <StateTest /> */}
      <header>React Todo</header>
      <ul className="tasks">
        <TodoHeader onAllDoneChange={onAllDoneChangeHandler} />
        <TodoList todoDatas={cachedData} onDoneChange={onDoneChangeHandler} />
      </ul>
      <TodoAppender
        inputData={{ todo, dueDate, priority }}
        onTaskKeyUp={onTaskKeyUpHandler}
        onDateChange={onDateChangeHandler}
        onSaveButtonClick={onSaveButtonClickHandler}
        onPrioritySelectChange={onPrioritySelectChangeHandler}
      />
    </div>
  );
};

export default TodoMain;
