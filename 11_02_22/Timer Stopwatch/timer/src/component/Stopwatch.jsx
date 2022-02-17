import { useRef, useState } from 'react'

export const Stopwatch = () => {

  let timerId = useRef();
  const [timer , serTimer] = useState(0);

  const startTimer = ()=>{
    if(!timerId.current){
      const id = setInterval(() => {
        serTimer((prev) =>{
          return prev + 1;
        })
      }, 1000);
      timerId.current = id;
    }
  }

  const endAt10 = ()=>{
    if(!timerId.current){
      const id = setInterval(() => {
        serTimer((prev) =>{
          if(prev < 10){
           return prev + 1;
          }
          else{
            clearInterval(id);
            timerId.current = null
            return prev;
          }
        })
      }, 1000);
      timerId.current = id;
    }
  }

  const pauseTimer = ()=>{
    clearInterval(timerId.current);
    timerId.current = null
  }
  const restTimer = ()=>{
    clearInterval(timerId.current);
    serTimer(0);
    timerId.current = null
  }

  return (
      <div>
        <h1>Stop Watch : {timer}</h1>

        <button onClick={startTimer}>Start</button>
        <button onClick={endAt10}>Start and end at 10</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={restTimer}>Reset</button>
      </div>
  );
}
