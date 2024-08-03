import React, { useState } from 'react';
import './SearchContainer.css';

const SearchContainer = ({ setPhoneData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/phones?name=${searchTerm}`);
    const data = await response.json();
    setPhoneData(data);
  };

  return (
    <div className="top-box"> 
      <div className="search-label">Compare with</div>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchContainer;
