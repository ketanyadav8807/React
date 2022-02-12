import React, {useState} from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'

export const Grocery = () => {
    const [todos , setTodos] = useState([]);
  return (
    <>
        <GroceryInput todos={todos} setTodos={setTodos} />
        <GroceryList todos={todos} setTodos={setTodos}/>
    </>
  )
}
