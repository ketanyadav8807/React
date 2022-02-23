import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
  const params = useParams();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/Products/${params.id}`)
    .then((res)=> res.json())
    .then((res)=> setProd(res))
    .catch((err)=> console.log(err))
  }, [])
  return (
    <div>
      <h1>Product: {params.id}</h1>
      <h2>Name :- {prod.name} || Price :- {prod.price}</h2>
    </div>
  )
}
