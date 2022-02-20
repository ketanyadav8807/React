import React, { useEffect , useState } from 'react'


export const Tabel = ({formData}) => {
    const [ans, setAns] = useState([]);
    
    const [pageNo , setPageNo] = useState(1); 

    const handelSubmit = ()=> {
        fetch("http://localhost:3000/User_data", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
    }

    useEffect(() => {
        fetch(`http://localhost:3000/User_data?_page=${pageNo}&_limit=3`)
        .then((r)=> r.json())
        .then((d)=>  setAns(d))
        .catch((e)=> {console.log("e" , e)})
        
    }, [ans , pageNo])
    
    const handelDelete = (a)=> {
        fetch(`http://localhost:3000/User_data/${a}`,{
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err))
    }

  return (
      <div>
        <button onClick={handelSubmit}>Submit</button>
        <button onClick={()=> setPageNo(pageNo === 1 ? pageNo : pageNo-1)}>Prev</button>
        <button onClick={()=> setPageNo(ans.length < 3 ? pageNo : pageNo+1)}>Next</button>
        { 
        <table border="1">
            <tbody>
            {ans.map((el)=>{
                 return(
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.fName}</td>
                        <td>{el.lName}</td>
                        <td>{el.address}</td>
                        <td>{el.age}</td>
                        <td>{el.dep}</td>
                        <td>{el.salary}</td>
                        <td>{el.isMarried === true ? "Married" : "Not Married"}</td>
                        <td><button onClick={() => handelDelete(el.id)}>Delete</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        }   
      </div>
  )
}
