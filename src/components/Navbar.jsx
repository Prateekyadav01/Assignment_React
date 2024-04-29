import React, { useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { WiMoonAltFull } from "react-icons/wi";
import { useDispatch } from 'react-redux';
import { checkState } from '../utils/darkSlice';
import react from '../assets/react.svg'

const Navbar = () => {
  const dispatch = useDispatch();
  const [darkMode , setDarkMode] = useState(false);

  const handleMode = ()=>{
    
    setDarkMode(!darkMode);
    dispatch(checkState(!darkMode));
    
  }
  return (
   <>
   <div className='flex flex-col justify-evenly bg-black'>
   <div className="flex flex-col w-20 min-h-screen  bg-black p-4 gap-3">
    <div>
      <img
        src={react}
        alt="Logo"
        className="h-16 w-[30px] mb-4"
      />
    </div>


      <div className="flex items-center text-white hover:text-blue-300 fixed top-20">
        <FaMessage className="text-xl mr-2" />
      </div>

      <div className="flex items-center text-white hover:text-blue-300 fixed top-28">
        <CgProfile className="text-xl mr-2" />
      </div>

      <div className="flex items-center text-white hover:text-blue-300 fixed top-36">
        <IoMdSettings className="text-xl mr-2" />
      </div>

      
    </div>
    <div>
    <h1 className='text-white font-bold ml-2'>mode 1</h1>
      < div className='w-[3vw] ml-4 mb-1 h-[12vh] rounded-xl bg-gray-300'>
        
         <WiMoonAltFull  className={` top-0 left-0 h-8 w-full rounded-lg cursor-pointer ${
              darkMode ? ' text-black' : 'bg-gray-300 text-red-600'
            }`}
            style={{
              transition: 'transform 0.3s ease',
              transform: darkMode ? 'translateY(100%)' : 'translateY(0)'
            }} onClick={handleMode}/>
       
      </div>
      <h1 className='text-white font-bold ml-2 mt-0'>mode 2</h1>
    </div>
   </div>
   </>
  )
}

export default Navbar


