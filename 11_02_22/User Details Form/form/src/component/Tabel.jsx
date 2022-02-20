import React, { useEffect } from 'react'


export const Tabel = ({formData}) => {
    
    let x = false;
    const handelSubmit = ()=> {
        x = true;
        console.log("x",x);
        console.log(formData)
    }
    useEffect(() => {
      
    }, [formData])
    
    console.log(x);
  return (
      <div>
        { ( x === true )? (
                <table border="1">
                    {FormData.map((el)=>{
                        // return(
                        // //     <>
                        // //     <tr>{el.fName}</tr>
                        // //     <tr>{el.lName}</tr>
                        // //     <tr>{el.address}</tr>
                        // //     <tr>{el.age}</tr>
                        // //     <tr>{el.dep}</tr>
                        // //     </>
                        // // 
                        
                        // )
                        console.log("a" , el.fName);
                    })}
                </table>
            ):(
               console.log("No")
            )
        }   
        <button onClick={handelSubmit}>Submit</button>
      </div>
  )
}
