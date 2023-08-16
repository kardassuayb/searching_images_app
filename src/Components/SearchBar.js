import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit("cars");
  };

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick} type="submit">
        Search!
      </button>
    </div>
  );
};

export default SearchBar;
