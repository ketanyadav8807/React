import logo from './logo.svg';
import './App.css';
import {Routes , Route, Link} from "react-router-dom"
import {Home} from "./components/Home"
import { Products } from './components/Products';
import { Product } from './components/Product';

function App() {
  return (
    <div className="App">
      <div style={{display: "flex" , justifyContent: "space-evenly" , backgroundColor: "grey", padding: "10px"}}>

        <Link to="/"><h2>Home</h2></Link>
        <Link to="/Products"><h2>Products</h2></Link>

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path="Products/:id" element={<Product />} />
      </Routes>

    </div>
  );
}

export default App;
