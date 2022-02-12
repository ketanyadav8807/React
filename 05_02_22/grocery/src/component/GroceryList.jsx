import React , {useState} from 'react'
import { GroceryInput } from './GroceryInput'

export const GroceryList = ({todos , setTodos}) => {
    const handelDelete = (todo) =>{
        const newTodoList = todos.filter(item => item.id !== todo.id);
        setTodos(newTodoList);
    }
  return (
    <>
    {
        <ul>
            {todos.map((todo)=>{
                return(
                        <li key={todo.id}>
                            
                            {todo.value}
                            <button  onClick={() => {handelDelete(todo)}}>Delete</button>
                        </li>
                )
            })}
       </ul>
    }
    </>
  )
}
