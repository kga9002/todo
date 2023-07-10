import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todo"))
  );
  const [status, setStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <TodoContext.Provider
      value={{ todoItems, setTodoItems, status, setStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { useTodoContext, TodoContextProvider };
