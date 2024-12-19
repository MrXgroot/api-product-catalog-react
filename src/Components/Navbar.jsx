import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bars from "../assets/svg/bars.svg";
import close from "../assets/svg/close1.svg";
import search from "../assets/svg/search.svg";
import cart from "../assets/svg/cart.svg";
import Searchbox from "./Seachbox";
import "./Navbar.css";

function Navbar({ handleSearchProducts, category }) {
  const navListItems = ["Home", "About", "Contact", "Services"];
  const [clicked, updateClick] = useState(false);
  const [mobileButton, addMobileButton] = useState(false);
  const handleBtnClick = () => {
    updateClick((c) => !c);
  };
  const handleCartBtn = () => {};
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img
            src={clicked ? close : bars}
            alt=""
            className="btn-bars"
            onClick={handleBtnClick}
          />

          <Link to="/" className="logo">
            Journey
          </Link>
        </div>
        <ul
          className={`nav-list-container ${clicked ? `nav-list-active` : ``}`}
        >
          {navListItems.map((items, key) => (
            <li className="nav-list" key={key}>
              <Link to={`/${items.toLowerCase()}`} className="nav-items">
                {items}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-search-container">
          <img src={cart} alt="cart-btn" className="cart-btn" />
        </div>
      </nav>
      <div className="show-search-bar">
        <Searchbox
          handleSearchProducts={handleSearchProducts}
          category={category}
        ></Searchbox>
      </div>
    </>
  );
}
export default Navbar;
