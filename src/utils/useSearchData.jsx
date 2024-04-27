import React, { useEffect } from 'react'
import {data} from "../assets/data"
const useSearchData = (search,setFilterData) => {
    const filterDataResult = (search) => {
        return data.filter((item) => {
            const lowerCaseSearch = search.toLowerCase();
            return (
                item.name.toLowerCase().includes(lowerCaseSearch) ||
                item.id.toString() === lowerCaseSearch
            );
        });
    };

    useEffect(() => {
        const ans = filterDataResult(search);
        return setFilterData(ans);
    }, [search]);
}

export default useSearchData
