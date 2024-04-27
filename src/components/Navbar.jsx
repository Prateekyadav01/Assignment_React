import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col w-20 h-screen bg-black p-4 gap-3">
    <div>
      <img
        src=""
        alt="Logo"
        className="h-16 w-auto mb-4"
      />
    </div>


      <div className="flex items-center text-white hover:text-blue-300">
        <FaMessage className="text-xl mr-2" />
      </div>

      <div className="flex items-center text-white hover:text-blue-300">
        <CgProfile className="text-xl mr-2" />
      </div>

      <div className="flex items-center text-white hover:text-blue-300">
        <IoMdSettings className="text-xl mr-2" />
      </div>
    </div>

  )
}

export default Navbar
