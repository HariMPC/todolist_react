import './Cards.css';
import React from 'react';

const   Output =({todos,setTodos,setEditTodo}) =>{
    const editItems=({id})=>{
        const findtodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findtodo);
    }

    const handleStatus=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item,status: !item.status}
                }
                return item;
            })
        )
    }
    const deleteItems=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));

    }
return(
<div className='tododisplay'>
    {todos.map((todo) =>
         (
            <div className='card'  key={todo.id} >
                    <div className='container'>
                <h4
                type='text'
                onChange={(event)=>event.preventDefault()}>Name : {todo.title}</h4>
                <p type='text'
                onChange={(event)=>event.preventDefault()}> <b>Discription: </b>{todo.discription}</p>

                <label>
                    Status:
                <input className='Stat' placeholder='Status' value={todo.status} required onChange={()=>handleStatus(todo)}/>
                </label>

                <button className='btn' onClick={()=>editItems(todo)} > 
                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/edit--v1.png" alt="edit--v1"/>
                </button>

                <button className='btn' onClick={()=>deleteItems(todo)}>
                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/60/filled-trash.png" alt="filled-trash"/>
                </button>

                </div>
                   
                
            </div>
              
       )
     )}
</div>
    )
}
export default Output;