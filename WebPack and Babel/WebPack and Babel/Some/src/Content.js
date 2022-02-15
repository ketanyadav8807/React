import React, { useState } from 'react'

function Content() {
    const [value, setValue] = useState("");
    
    const btnHandler = () => {
        console.log("Hello");
        console.log(value);
    } 
    
  return (
    <div>
        <>
            <input
                type="text"
                value={value}
                onChange = {(e) => setValue(e.currentTarget.value)}
            /> 
            <button onClick={btnHandler}>Submit</button>
        </>
        <h1>{value}</h1>  
    </div>
  )
    
}

export default Content