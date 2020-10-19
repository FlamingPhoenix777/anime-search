import React from "react";

const SearchBox = () => {
  return (
    <div className="search">
      <div className="search__text__container">
        <input type="text" id="search__text" placeholder="e.g. Try 'Naruto'" />
      </div>

      <div className="search__button__container">
        <button className="search__button">search</button>
      </div>
    </div>
  );
};

export default SearchBox;
