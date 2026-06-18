import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice.js";
import { Provider } from "react-redux";
import { articleSlice } from "./slices/articleSlice.js";
import { userSlice } from "./slices/userSlice.js";

const toolkitStore = configureStore({
  // toolkitStore에 slice store를 등록.
  reducer: {
    // todo 이름으 state를 만든다.
    todo: todoSlice.reducer,
    //article이라는 state를 만든다.
    article: articleSlice.reducer,
    //user
    user: userSlice.reducer,
  },
});

export const ToolkitProvider = ({ children }) => {
  return <Provider store={toolkitStore}>{children}</Provider>;
};
