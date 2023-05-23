import TodoItem from "./TodoItem";
import React from "react";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      <h4>TodoList❤️</h4>
      <input className="searchbar" placeholder="할일을 입력하세요"></input>
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(TodoList);
