import logo from './logo.svg';
import './App.css';
import { Timer } from './component/Timer';
import { useState } from 'react';

function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [count, setCount] = useState();

  return (
    <div className="App">
      <h1 className='h1'> Set Timer </h1>

      <input className='st' value={startTime} type="number" placeholder='Start Time' onChange={(e)=>{ setStartTime(e.currentTarget.value);}}/>
      <input className='en' value={endTime} type="number" placeholder='End Time' onChange={(e)=>{ setEndTime(e.currentTarget.value);}}/>

     <Timer startTime={startTime} endTime={endTime} setCount={setCount} count={count} />
    </div>
  );
}

export default App;
