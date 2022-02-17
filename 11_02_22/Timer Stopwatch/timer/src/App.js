import {useState } from "react";
import { Stopwatch } from "./component/Stopwatch";
import {Timer} from "./component/Timer";
import { Tim , Stop} from "./styled_Compo/style.style"

export default function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [count, setCount] = useState();

  return (
    <div className="App">
      <Stop>
        <Stopwatch />
      </Stop>

      <Tim>
        <h1 className='h1'> Set Timer </h1>

        <input className='st' value={startTime} type="number" placeholder='Start Time' onChange={(e)=>{ setStartTime(e.currentTarget.value);}}/>
        <input className='en' value={endTime} type="number" placeholder='End Time' onChange={(e)=>{ setEndTime(e.currentTarget.value);}}/>

        <Timer startTime={startTime} endTime={endTime} setCount={setCount} count={count} />
      </Tim>

      <div>
        <h2 style={{textAlign: "center"}}>Minimum Viable Product</h2>
        <ul>
          <li><input type="checkbox" /> You must have implemented a stopwatch that lets you start, stop and reset. </li>
          <li><input type="checkbox" /> The stopwatch must display the number of seconds and milliseconds. </li>
          <li><input type="checkbox" /> The timer must allow a user to manually enter the time using an inputbox, in seconds. </li>
          <li><input type="checkbox" />  The user should be able to start, stop and reset the timer. </li>
          <li><input type="checkbox" /> The user should be able to toggle between the timer and the stopwatch using tabs just like the google timer. </li>
          <li><input type="checkbox" /> The timer should not increment twice if its already clicked. </li>
        </ul>
      </div>
    </div>
  );
}
