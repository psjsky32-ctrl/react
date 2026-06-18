import { createSlice } from "@reduxjs/toolkit";
// ReduxToolkit slice store 생성.
export const todoSlice = createSlice({
  name: "todo-slice", // cation의 type으로 사용되는 이름.
  //메모리가 바뀌어서 넣을수가 없다 => { list: []}
  initialState: {
    list: [],
  }, // todo-slice가 사용할 초기 state 값
  reducers: {
    refresh(store, action) {
      store.list = action.payload;
    }, // 이 함수가 state를 변경한다
    doneItem(store, action) {
      // action ==> done 처리할 todo의 ID가 전달된다.
      // store.list에서 id가 action과 같은 todo의 인덱스를 찾아온다.
      const index = store.list.findIndex((todo) => todo.id === action.payload);
      store.list[index].done = true;
    },
    allDone(store) {
      store.list = store.list.map((todo) => ({ ...todo, done: true }));
    },
  },
});

//reducer 호출하는 객체
export const todoAction = todoSlice.actions;
console.log("TodoAction", todoAction);
