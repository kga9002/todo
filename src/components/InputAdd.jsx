import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export default function InputAdd() {
  const { todoItems, setTodoItems } = useTodoContext();
  const [todoValue, setTodoValue] = useState("");

  const addTodoItem = () => {
    if (todoValue !== "") {
      if (todoItems !== null) {
        setTodoItems((prev) => [
          ...prev,
          {
            title: todoValue,
            completed: false,
            id: Math.floor(Math.random() * 101),
          },
        ]);
      } else {
        setTodoItems([
          {
            title: todoValue,
            completed: false,
            id: Math.floor(Math.random() * 101),
          },
        ]);
      }
      setTodoValue("");
    } else {
      alert("할일을 입력해주세요.");
    }
  };

  function handleEnter(e) {
    if (e.key === "Enter") {
      addTodoItem();
    }
  }

  return (
    <div className="dark:bg-sky-950 bg-slate-400 px-6 py-3">
      <div className="">
        <input
          type="text"
          placeholder="Add Todo"
          className="rounded-l-md w-5/6 p-1"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <button
          onClick={addTodoItem}
          className="dark:bg-orange-400 bg-blue-700 w-1/6 rounded-r-md p-1"
        >
          Add
        </button>
      </div>
    </div>
  );
}
