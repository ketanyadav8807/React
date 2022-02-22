import React from 'react'
import {Link , Routes , Route} from "react-router-dom"
import {Faq} from "./Faq";

export const Footer = () => {
  return (
      <>
    <Routes>
     <Route path="/FAQ" element={<Faq />} />
    </Routes>

    <div style={{display: "flex" , justifyContent: "space-between" , marginTop: "200px" , backgroundColor: "lightgrey", padding: "50px"}}>
        <div>
            <Link to="/FAQ"><h1>FAQ</h1></Link>
        </div>
        
        <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/763/789/small/social-media-facebook-instagram-logos-social-media-icons-black-and-white-set-free-vector.jpg" style={{width: "45%"}}/>
        </div>
    </div>
    </>
  )
}
