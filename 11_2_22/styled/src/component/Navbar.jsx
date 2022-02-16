import React from 'react'

import {Nav , ImgDiv , RightPartInNav} from './style.style';

export const Navbar = () => {
    const widthOfWindow = window.innerWidth;
  return (
    <Nav>
        <ImgDiv width={widthOfWindow}>
            <img src='https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook'/>
        </ImgDiv>
        <RightPartInNav width={widthOfWindow}>
            <a href='#'>Home</a>
            <a href='#'>About Us</a>
            <a href='#'>Contact</a>
        </RightPartInNav>
    </Nav>
  )
}
