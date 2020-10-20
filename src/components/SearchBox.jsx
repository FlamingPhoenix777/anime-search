import * as React from "react";

const SearchBox = ({ handleChange }) => {
  return (
    <div className="search">
      <div className="search__text__container">
        <input
          type="text"
          id="search__text"
          placeholder="e.g. Try 'Naruto'"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
