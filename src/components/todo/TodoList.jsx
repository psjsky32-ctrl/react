import { useContext } from "react";
import TodoContext from "./contexts/TodoContext.jsx";
import TodoItem, { TodoItemForChildren } from "./TodoItem.jsx";

const TodoList = ({ children }) => {
  console.log("TodoList");
  const { componentName } = useContext(TodoContext);

  if (!componentName || componentName !== "TodoGrid") {
    <></>;
  }

  const providerProps = {
    componentName: "TodoList",
  };

  return (
    <TodoContext.Provider value={providerProps}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoList;
