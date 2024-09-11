import React from 'react'
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import {useState, useEffect} from 'react'

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="navBar w-full h-20 border-b-2 border-gray-300 flex items-center justify-between px-24">
    <img src='../src/assets/LOGO.png' className="logo font-bold w-18 h-24 flex mt-4 items-center justify-center ml-12 text-xl" />
    <ul className="flex desktoplink flex-row items-center cursor-pointer h-full">
      <a href='#Products' className=' h-full'><p className="navLinkItem h-full font-bold px-4 flex items-center justify-center hover:bg-neutral-400 hover:text-white ">PRODUCTS</p></a>
      <a href='#Services' className=' h-full'><p className="navLinkItem h-full font-bold px-4 flex items-center justify-center hover:bg-neutral-400 hover:text-white">SERVICES</p></a>
      <a href='#About' className=' h-full'><p className="navLinkItem h-full font-bold px-4 flex items-center justify-center hover:bg-neutral-400 hover:text-white">ABOUT US</p></a>
      <a href='#Contact' className=' h-full'><p className="navLinkItem h-full font-bold px-4 flex items-center justify-center hover:bg-neutral-400 hover:text-white">CONTACT</p></a>
    </ul>
    <div className="MenuIcon  text-slate-800 cursor-pointer hidden justify-center relative">
          {toggle? <TfiList size = {40} onClick = {() => setToggle(false)} /> 
          : <TfiClose size = {40} onClick = {() => setToggle(true)}/> }
     </div>
    {!toggle && (
                  <div className='Bar flex flex-col scale-up-tr w-full h-fit py-8 absolute right-0 z-10 mt-80' >
                      <ul className="flex flex-col justify-start cursor-pointer py-2 w-full h-full text-white text-lg">
                        <a href='#Products' className=' h-full px-8 hover:border-l-2 py-2 border-white hover:bg-gray-600'><p>PRODUCTS</p></a>
                        <a href='#Services' className=' h-full px-8 hover:border-l-2 py-2 border-white hover:bg-gray-600'><p>SERVICES</p></a>
                        <a href='#About' className=' h-full px-8 hover:border-l-2 py-2 border-white hover:bg-gray-600'><p>ABOUT US</p></a>
                        <a href='#Contact' className=' h-full px-8 hover:border-l-2 py-2 border-white hover:bg-gray-600'><p>CONTACT</p></a>
                      </ul>
                  </div>
                  
              )
              }
  </div>
  )
}

export default NavBar