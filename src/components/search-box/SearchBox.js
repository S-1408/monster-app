import React from "react";
import "./SearchBox.css";
const SearchBox = ({ placeholder, handleSearch, searchField }) => {
  return (
    <div>
      <input
        className='search-box'
        type='search'
        placeholder={placeholder}
        value={searchField}
        onChange={(e) => handleSearch(e)}
        size='40'
      />
    </div>
  );
};
export default SearchBox;
