import React from "react";
import {TodoType} from "../helpers/types";

const TodoItem: React.FC<{todo: TodoType, removeTodo: (id:string) => void}> = (props) => {

  const clickHandler = () => {
   props.removeTodo(props.todo.id);
  }
  return (
    <span onClick={clickHandler} id={props.todo.id}>{props.todo.text}</span>
  );
}

export default TodoItem;