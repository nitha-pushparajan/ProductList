import { useState } from "react";

function Search(props) {
  const [searchParam, setSearchparam] = useState("");

  const handleChange = (e) => {
    setSearchparam(e.target.value);
    props.handleChange(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-label">
        <p>Search Products</p>
      </div>
      <div className="search-input">
        <input
          className=""
          name="name"
          type="search"
          value={searchParam}
          placeholder="Search By  Name"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
