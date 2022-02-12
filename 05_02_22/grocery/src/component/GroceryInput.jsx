import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
export const GroceryInput = ({todos , setTodos}) => {
    const [value , setValue] = useState("");
  
  return (
    <>
        <input type="text" placeholder="+ add-grocery"value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
        <button onClick={() => 
        {
          if(value){
            setTodos([...todos , {
              value,
              id: uuid()
            }]);
            setValue("");
          }
          else{
            alert("Enter value");
          }
        }
          }>+</button>
    </>
  );
};
