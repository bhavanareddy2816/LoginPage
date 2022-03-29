import React from 'react'
import data from "./MOCK_DATA.json";
import SearchBar from './SearchBar';
const Home = () => {
    
  return (
    <div>
        <SearchBar data={data} />
    </div>
  )
}

export default Home;