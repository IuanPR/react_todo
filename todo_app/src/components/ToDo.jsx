import React from "react";
import { useState, createContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";

export const TaskContext = createContext("");

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const addTask = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <div className="todo">
      <div
        className="search-bar"
        onKeyDown={(ev) => {
          if (ev.keyCode == 13) {
            addTask(todo);
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter the task"
          maxLength="53"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <AiOutlinePlusCircle
          className="search-bar-img"
          onClick={() => addTask(todo)}
        />
      </div>
      <div className="tasks">
        {todos.map((task, index) => (
          <TaskContext.Provider key={index} value={task}>
            <Task />
          </TaskContext.Provider>
        ))}
      </div>
    </div>
  );
}
