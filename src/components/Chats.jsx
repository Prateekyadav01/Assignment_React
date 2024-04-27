import React from 'react';
import { useSelector } from 'react-redux';

const Chats = () => {
  const chatData = useSelector((store) => store.chat);

  return (
    <div className="bg-black w-full p-4">
    
    <p className="text-white text-center m-auto w-[30vw] border border-solid border-red-500 rounded-lg p-2">
        {chatData}
      </p>
      
      <p className="text-white text-center text-xl font-semibold border-b border-white pb-2 m-4">
       Today 
      </p>
    </div>
  );
};

export default Chats;
