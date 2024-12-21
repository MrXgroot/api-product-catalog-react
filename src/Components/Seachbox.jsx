import "./Searchbox.css";
import search from "../assets/svg/search.svg";
import { useState, useRef, useEffect } from "react";
function Searchbox({ handleSearchProducts, category }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchProducts(searchTerm);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        className="search-input"
        placeholder={`Search for ${category}`}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-btn" type="submit">
        <img src={search} alt="" className="search-logo" />
      </button>
    </form>
  );
}

export default Searchbox;
