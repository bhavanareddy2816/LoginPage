import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
const SearchBar = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [isSearchable, setIsSearchable] = useState(true);
    const[isChecked , setIsChecked ] = useState(false);
    
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

    const onCheckHandler = (e) => {
      if(isChecked === false){
          setIsChecked(true)
      }else{
          setIsChecked(false);
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
            
                {filteredData.length !== 0 && (
                    <div className='dataresult'>
                        <div className='item'>
                            <input type="checkbox" className="form-check-input" name = "allselect" onChange={onCheckHandler}></input>
                            <label>All Select</label>
                        </div>
                        {filteredData.map((item) => {
                            const { id, title } = item
                            return (
                                <div className='item' key={id} >
                                    <input type="checkbox" className="form-check-input"  name={title} onChange={onCheckHandler}></input>
                                    <p>{title}</p>
                                </div>
                            )
                        })}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default SearchBar