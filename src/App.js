import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeTodo = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  }

  const todoSubmit = (event) => {
    event.preventDefault();
    if(todo === "") return;
    setTodoList((current) => [todo, ...todoList]);
    setTodo("");
  } 

  return (
    <div>
      <h1>To do List {todoList.length}</h1>
      <form onSubmit={todoSubmit}>
        <input onChange={changeTodo} type="text" value={todo} placeholder="What to do" />
        <button>Add</button>
      </form>
      <hr/>
      <ul>
        {todoList.map((index, each) => (
          <li key={index}>{each}</li>
        ))}
      </ul>
      </div>
  );
}

export default App;
