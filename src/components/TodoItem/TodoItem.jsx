import React from "react";

const TodoItem = ({ id, todo }) => {
  return (
    <>
      <li id={id}>{todo.value.text}</li>
    </>
  );
};

export default TodoItem;
