import "./Searchbox.css";
import search from "../assets/svg/search.svg";
function Searchbox() {
  const handleSubmit = () => {};
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search here..."
      />
      <button className="search-btn">
        <img src={search} alt="" className="search-logo" />
      </button>
    </form>
  );
}

export default Searchbox;
