import React , {useState} from 'react'
import data from "./MOCK_DATA.json";
import SearchBar from './SearchBar';
const Home = () => {
    const[isSearchable , setSearchable] = useState(true);
    const[isMultiSelect , setMultiSelect] = useState(true);
  return (
    <div>
        <SearchBar data={data} isSearchable = {isSearchable} setSearchable={setSearchable} isMultiSelect={isMultiSelect} setMultiSelect={setMultiSelect} />
    </div>
  )
}

export default Home;