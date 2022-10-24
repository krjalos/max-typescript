import React, {useRef} from "react";

const AddTodo: React.FC<{addTodo: (text: string) => void}> = (props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputValue = inputRef.current!.value;

    if(inputValue.trim().length > 0) {
      props.addTodo(inputValue);
    }
  }


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-text">Enter Todo Text</label>
      <input ref={inputRef} type="text" id="todo-text"/>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;