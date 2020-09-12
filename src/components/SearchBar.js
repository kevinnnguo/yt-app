import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState("")

  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(term)
        }}
      >
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value )}
          ></input>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
