import React, { useState } from 'react';

export const Counter = (props) => {
    const [count , setCount] = useState(0);
  return(
    <div>
        <h1>{props.name} : {count}</h1>
        <button onClick={ () => setCount(count +1)}>Increment</button>
        <button onClick={()=> setCount(count -1)}>Decrement</button>
        <br />
        <button onClick={()=> setCount(count*2)}>Double </button>
    </div>
  );
};
