import React from 'react';
import { useSelector } from 'react-redux';

const Chats = () => {
  const chatData = useSelector((store) => store.chat);
  const darkMode = useSelector((store) => store.dark); // Assuming darkMode is a boolean

  return (
    <div className={` ${darkMode ? 'bg-white w-full p-4' : 'bg-black w-full p-4'}`}>
      
      <p className={`${darkMode ? 'text-black' : 'text-white'} text-center max-w-[30vw] mx-auto border border-solid border-gray-500 rounded-lg p-2`}>
        {chatData}
      </p>

      <p className={`${darkMode ? 'text-black text-center text-xl font-semibold border-b border-white pb-2 mt-4' : ''}`}>
        Today
      </p>

      <div className={`text-${darkMode ? 'black' : 'white'} mt-4 flex justify-end`}>
        <p className="w-[30vw] h-[31vh] text-right mb-5 border border-purple-800 bg-purple-900 rounded-lg p-2">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui quod autem optio, consequatur eligendi officiis omnis molestiae, deserunt alias eaque cupiditatme voluptate dignisil.
          <h1 className="text-gray-600 font-bold bg-purple-800 rounded-lg mt-2 p-1">
            You
          </h1>
        </p>
      </div>

      <div className={`text-${darkMode ? 'black' : 'white'} mt-2 flex justify-start`}>
        <p className="w-[30vw] h-[30vh] text-left mb-1 border border-purple-800 bg-purple-900 rounded-lg p-2">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui quod autem optio, consequatur eligendi officiis omnis molestiae, deserunt alias eaque cupiditatme voluptate dignisil.
          <h1 className="text-gray-600 font-bold bg-purple-800 rounded-lg mt-1 p-1">
            {chatData}
          </h1>
        </p>
      </div>

      <input
        type="text"
        className={`fixed bottom-0 mb-3 mr-5 px-4 py-2 w-full text-${darkMode ? 'black' : 'white'} ${darkMode ? 'bg-white' : 'bg-black'} border border-purple-800 rounded-lg focus:outline-none`}
        placeholder="Type your message..."
      />
    </div>
  );
};

export default Chats;
