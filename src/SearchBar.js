import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import Dropdown from './Dropdown';
const SearchBar = ({ data, isSearchable, setSearchable, isMultiSelect, setMultiSelect }) => {
    const [filteredData, setFilteredData] = useState([]);

    //Filtering the dropdown options as per the enterd value
    const filterHandler = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter(value => value.title.toLowerCase().includes(searchWord.toLowerCase()));
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    


    return (
        <div className='main'>
            <div className='search'>
                {isSearchable &&
                    <div className='searchInputs'>
                        <input type='text' placeholder='Enter a name...' onChange={filterHandler}></input>
                        <div className='searchIcon'><SearchIcon /></div>
                    </div>

                }


                {filteredData.length !== 0 && isMultiSelect && (
                    <Dropdown filteredData={filteredData}/>
                )
                }
            </div>
        </div>
    )
}

export default SearchBar;