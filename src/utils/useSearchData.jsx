import React, { useEffect } from 'react'
import {data, Light} from "../assets/data"
import { useSelector } from 'react-redux';
const useSearchData = (search,setFilterData) => {
    const selectore = useSelector((store)=>store.dark);
    const filterDataResult = (search) => {
       if(!selectore){
        return data.filter((item) => {
            const lowerCaseSearch = search.trim().toLowerCase();
            return (
                item.name.trim().toLowerCase().includes(lowerCaseSearch) ||
                item.id.toString() === lowerCaseSearch
            );
        });
       }
       else{
        return Light.filter((item) => {
            const lowerCaseSearch = search.trim().toLowerCase();
            return (
                item.name.trim().toLowerCase().includes(lowerCaseSearch) ||
                item.id.toString() === lowerCaseSearch
            );
        });
       }
    };

    useEffect(() => {
        const ans = filterDataResult(search);
        return setFilterData(ans);
    }, [search,selectore,setFilterData]);
}

export default useSearchData
