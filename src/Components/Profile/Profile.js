 import './Profile.css'
 import { v4 as uuidv4} from "uuid";
 import { useEffect } from 'react';

 const Input = ({name,setName,input,setInput,status,setStatus,todos,setTodos,editTodo,setEditTodo})=>{
    const updateTodo=(title,discription,id,status)=>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,discription,id,status} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(()=>{
        if(editTodo){
            setName(editTodo.title);
           
        }else{
            setName("")
        }
    },[setName,editTodo]);

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.discription);
        }else{
            setInput("")
        }
    },[setInput,editTodo]);

    const onNameChange =(event)=>{
        setName(event.target.value)
    }
    const onInptChange =(event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit =(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidv4(), title : name, discription: input, status: false}]);
        setName("");
        setInput("");
        }else{
            updateTodo(name,input,editTodo.id,editTodo.status)
        }
        
    }
    return(
        <form onSubmit={onFormSubmit}>
        <div className='Details' >
        <input className='ToDoS' placeholder='Enter Your Name' value={name} required onChange={onNameChange}/>
        
        <input className='ToDo' placeholder='Enter your Todos' value={input} required onChange={onInptChange}/>
        
        <button className='ToDoS' type='Submit' >{editTodo ? "ok" : "ADD"}</button>
        </div>
        </form>
            
            
         
    )
 }
 export default Input;