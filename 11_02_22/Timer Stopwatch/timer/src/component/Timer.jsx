import React, { useEffect } from 'react'

export const Timer = ({startTime , endTime , setCount , count}) => {

    useEffect(() => {
            
        const interval =  setInterval(() => {
                setCount((prev)=>{
                    if(prev < endTime){
                        return prev+1;
                    }
                    else{
                        clearInterval(interval);
                        return prev;
                    }
                })
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },[count]);
        
    
  return (
    <div>
        <h2 className='our_timer'>Timer :  {count}</h2>

        <button className='btn' onClick={()=> 
            {
                startTime = Number(startTime);
                endTime =  Number(endTime);

                if(startTime < endTime){
                    setCount(startTime);
                }
                else{
                    alert("Invalid entries found");
                }
            }
        }>Start Timer</button>

    </div>
  )
}
