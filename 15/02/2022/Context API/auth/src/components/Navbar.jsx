import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
export const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
      <>
      <h1 style={{backgroundColor: "lightgrey" , padding: "30px" , margin: "0px"}}>Click And See The Toggle Behaviour</h1>
        <button style={{padding: "10px", color: "red" , borderRadius: "10px 5px" , fontSize: "20px" , marginTop: "50px"}} onClick={()=> {
            setIsAuth(isAuth === true ? false : true);
        }}>{isAuth ? "Log out" : "Login"}</button>
      </>
  )
}
