import './App.css'
import React,{useState} from 'react';
import Input from "./Components/Profile/Profile";
import Output from "./Components/Cards/Cards";
function App() {

  const[input,setInput]=useState("");
  const[name,setName]=useState("");
  const[status,setStatus]=useState("");
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]=useState(null);
  return (
    <div className="App">
      <h1> Todo List App</h1>
    <Input
    name= {name}
    setName={setName}
    input={input}
    setInput={setInput}
    status= {status}
    setStatus={setStatus}
    todos={todos}
    setTodos={setTodos}
    editTodo={editTodo}
    setEditTodo={setEditTodo}
    />
    <Output todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
