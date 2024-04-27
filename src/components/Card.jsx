import React from 'react';

const Card = ({ data, nodata, }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 mt-4 mb-4 flex items-center justify-center ml-4 w-[90%]">
       
      <h1 className="text-xl font-bold text-white">{data.name}</h1>
    </div>
  );
};

export default Card;
