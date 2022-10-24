import React, {useState} from 'react';

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {TodoType} from "./helpers/types";

import './App.css';

const DUMMY_TODOS = [{
  id: 't1',
  text: "Finish the course"
},
  {
    id: 't2',
    text: "Start new one"
  }
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>(DUMMY_TODOS);

  const addTodo = (text: string) => {
    setTodos((prevState) => {
      const newTodo = {id: Math.random().toString(), text: text};
      return [...prevState, newTodo];
    });
  }

  const removeTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== id);
    })
  }


  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
