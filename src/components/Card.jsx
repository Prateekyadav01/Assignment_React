import React from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../utils/chatSlice'


const Card = ({ data, nodata, }) => {
  const dispatch = useDispatch((store)=> store.chat)
  
  const handleUserName = () => {
      dispatch(add(data.name));
      console.log(data.name)
  }
  return (
    <div className="bg-black rounded-lg shadow-md p-4 mt-4 mb-4 flex items-center justify-center ml-4 w-[90%]">

      <h1 className="text-xl font-bold text-white" onClick={handleUserName}>{data.name}</h1>
    </div>
  );
};

export default Card;
