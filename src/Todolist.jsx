import React, { Component } from "react";

const TodoList = (props) => {
  return (
    <>
      <li>
        {props.text}
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
      </li>
    </>
  );
};
export default TodoList;
