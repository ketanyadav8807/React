import { useRef, useState } from "react";
import './App.css';
import { Tabel } from "./component/Tabel";

export default function App() {
  const fileRef = useRef();
  const [formData , setFormData] = useState({});

  const handelData = (e) => {
    let {name , value , type , checked} = e.currentTarget ;
    
   value = type === "checkbox" ? checked : value ;
   
    setFormData(
        {...formData , [name]:value }
      );
  }

  return (
    <div className="App">
      <h1>Employee Details</h1>

      <form>

        <div>
          <label>First Name :</label>
          <input value={formData.fName} name="fName" type="text" placeholder="First Name" 
          onChange={handelData}/>
        </div>

        <div>
          <label>Last Name :</label>
          <input value={formData.lName} name="lName" type="text" placeholder="Last Name" 
          onChange={handelData}
          />
        </div>

        <div>
          <label>Age :</label>
          <input value={formData.age} name="age" type="number" placeholder="age"
          onChange ={handelData}
          />
        </div>

        <div>
          <label>Address :</label>
          <input type="text" value={formData.address} name="address" onChange={handelData} />
        </div>

        <div>
          <label>Department :</label>
            <select value={formData.dep} name="dep" onChange={handelData}>
              <option>Choose Department</option>
              <option>Student</option>
              <option>Working</option>
            </select>
        </div>

        <div>
          <label>Salary :</label>
          <input type="number" name="salary" value={formData.salary} onChange={handelData}/>
        </div>

        <div>
          <label>Married :</label>
          <input type="checkbox" name="isMarried" checked={formData.isMarried} onChange={handelData}/>
        </div>

      </form>
      <Tabel formData={formData} />
    </div>
  );
}
