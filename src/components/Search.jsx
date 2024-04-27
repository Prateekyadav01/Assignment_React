

import React, { useState } from "react";
import Card from "./Card";
import { data } from "../assets/data"
import useSearchData from "../utils/useSearchData";


const Search = () => {
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);

    useSearchData(search, setFilterData);

    const handleAdd = () => {
        let obj = {
            id: data.length + 1,
            name: search
        }
        data.push(obj);
        setSearch("");
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
    }
    return (
        <div className="flex flex-col min-h-screen bg-blue-950">
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
                    filterData.length > 0 ? (filterData.map((e) => {
                        return <Card data={e} key={e.id} />
                    })) : (<>
                        <h1>No data is here so we show all data</h1>
                        {data && data.map((e, i) => {
                            return <Card data={e} key={e.id} nodata="No data," />
                        })}
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default Search;


