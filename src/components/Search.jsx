

import React, { useState } from "react";
import Card from "./Card";
import { data ,Light} from "../assets/data"
import useSearchData from "../utils/useSearchData";
import { useSelector } from "react-redux";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


const Search = () => {
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);
    const selector = useSelector((store)=>store.dark);
    const [click , setClick] = useState(false);

    // creating a custom hooks we get the filterData and make our component clean
    useSearchData(search, setFilterData);

    const handleAdd = () => {
        let obj = {
            id: data.length + 1,
            name: search
        }
        if(!selector){
        data.push(obj);
        }
        else{
            Light.push(obj);
        }
        setSearch("");
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
    }

    const handleHide =()=>{
        setClick(!click);
    }
    return (
        <>
        {
            click ? (<div className="bg-black">
                <FaChevronCircleRight  className="bg-white mt-72" onClick={handleHide}/>
            </div>) : (<div className="flex flex-col min-h-screen bg-blue-950">
            <FaChevronCircleLeft onClick={handleHide} className="absolute ml-[280px] top-80 m-4  bg-white"/>
            
            <div className=" rounded-lg p-4 shadow-lg">
                <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        className="px-4 py-2 text-white bg-black focus:outline-none w-48 "
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleAdd} className="px-4 py-2 bg-black text-white border border-red-900 hover:bg-blue-600 hover:text-white focus:outline-none">
                        Add
                    </button>
                </div>
            </div>

            <div className="bg-gray-800">
                {
                  selector===false ? (  filterData.length > 0 ? (filterData.map((e) => {
                    return <Card data={e} key={e.id} />
                })) : (<>
                    <h1 className="text-white font-bold">No data is here so we show all data</h1>
                    {data && data.map((e, i) => {
                        return <Card data={e} key={e.id}  />
                    })}
                </>
                )) : (  filterData.length > 0 ? (filterData.map((e) => {
                    return <Card data={e} key={e.id} />
                })) : (<>
                    <h1 className="text-white font-bold">No data is here so we show all data</h1>
                    {Light && Light.map((e, i) => {
                        return <Card data={e} key={e.id} />
                    })}
                </>
                ))
                }
            </div>
        </div>) 
        }
        </>
    );
};

export default Search;


