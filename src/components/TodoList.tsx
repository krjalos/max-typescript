import React from "react";
import TodoItem from "./TodoItem";
import {TodoType} from "../helpers/types";

const TodoList: React.FC<{todos: TodoType[], removeTodo: (id: string) => void}> = (props) => {

  return (
    <ul>
      {props.todos.map(todo => <li key={todo.id}>
        <TodoItem todo={todo} removeTodo={props.removeTodo}/>
      </li>)}
    </ul>
  );
}

export default TodoList;