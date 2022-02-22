import React ,{useState , useEffect} from 'react'
import styled from "./design.module.css";

export const Products = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((res)=> res.json())
      .then((response)=> 
        setData(response)
      )
      .catch((err)=> console.log(err))
    }, [])
    
  return (
    <div>
      <h1>Products</h1>
      {
        data.map((el)=>{
          return(
            <div key={el.id} className={styled.prod}>
            <img src={el.image} alt="Image"  style={{width: "30%"}}/>
            <h3>{el.price}</h3>
            <h3>{el.title}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

