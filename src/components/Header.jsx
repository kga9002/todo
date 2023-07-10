import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { useModeContext } from "../context/ModeContext";

export default function Header() {
  const { status, setStatus } = useTodoContext();
  const { mode, setMode } = useModeContext();

  return (
    <div className="p-6 dark:bg-sky-950 bg-slate-400">
      <span className="cursor-pointer" onClick={() => setMode(!mode)}>
        {mode === true ? "🌞" : "🌙"}
      </span>
      <div className="float-right">
        <ul>
          <li
            className={
              "float-left mx-3 text-blue-700 dark:text-orange-300 cursor-pointer " +
              (status === "all" ? "underline underline-offset-8" : "")
            }
            onClick={() => setStatus("all")}
          >
            All
          </li>
          <li
            className={
              "float-left mx-3 text-blue-700 dark:text-orange-300 cursor-pointer " +
              (status === "active" ? "underline underline-offset-8" : "")
            }
            onClick={() => setStatus("active")}
          >
            Active
          </li>
          <li
            className={
              "float-left mx-3 text-blue-700 dark:text-orange-300  cursor-pointer " +
              (status === "completed" ? "underline underline-offset-8" : "")
            }
            onClick={() => setStatus("completed")}
          >
            Completed
          </li>
        </ul>
      </div>
    </div>
  );
}
