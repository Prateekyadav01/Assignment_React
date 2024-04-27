import React from "react";

const Search = () => {
  return (
    <div className="flex  bg-blue-950">
      <div className=" rounded-lg p-4 shadow-lg">
        <div className="flex border border-gray-600 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-white bg-black focus:outline-none w-48"
          />
          <button className="px-4 py-2 bg-black text-white border border-red-900 hover:bg-blue-600 hover:text-white focus:outline-none">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
