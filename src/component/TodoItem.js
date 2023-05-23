import "./TodoItem.css";
import React from "react";

const TodoItem = ({ id, content, isDone, createdDate }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox">
        <input checked={isDone} type="checkbox"></input>
      </div>
      <div className="title">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default React.memo(TodoItem);
