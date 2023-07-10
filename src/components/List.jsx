import React from "react";
import { useTodoContext } from "../context/TodoContext";

export default function List() {
  const { todoItems, setTodoItems, status } = useTodoContext();

  function removeItem(id) {
    setTodoItems((prev) => prev.filter((o) => o.id !== id));
  }

  function toggleItem(e, id) {
    setTodoItems((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return { ...p, completed: e.target.checked };
        }
        return p;
      })
    );
  }

  function filterItem(status) {
    switch (status) {
      case "all":
        return todoItems;
      case "active":
        return todoItems.filter((o) => o.completed === false);
      case "completed":
        return todoItems.filter((o) => o.completed === true);
      default:
        return null;
    }
  }

  return (
    <div className="h-full">
      <ul>
        {filterItem(status).map((o) => (
          <li
            className={
              "px-3 py-1 text-lg font-bold " +
              (o.completed ? "line-through" : "")
            }
            key={o.id}
          >
            <label>
              <input
                type="checkbox"
                className="mr-1"
                onChange={(e) => toggleItem(e, o.id)}
                checked={o.completed}
              />
              {o.title}
            </label>
            <span
              onClick={() => removeItem(o.id)}
              className="float-right cursor-pointer"
            >
              🧹
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
