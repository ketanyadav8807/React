import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

export const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Products")
        .then((res)=> res.json())
        .then((res)=> setData(res))
        .catch((err)=> console.log(err))
    }, [])

    const navigate = useNavigate();
    const handelProd = (id)=> {
        navigate(`/Products/${id}`);
    }


  return (
    <div>
        <h1>Products Page</h1>
        <tabel>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
        {
            
            data.map((el)=>{
                return(
                    <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td><button onClick={()=> handelProd(el.id)}>details</button></td>
                    </tr>
                )
            })
        }
            </tbody>
        </tabel>
    </div>
  )
}
