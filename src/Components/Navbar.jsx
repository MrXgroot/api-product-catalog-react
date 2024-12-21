import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import bars from "../assets/svg/bars.svg";
import close from "../assets/svg/close1.svg";
import search from "../assets/svg/search.svg";
import cart from "../assets/svg/cart.svg";
import Searchbox from "./Seachbox";
import "./Navbar.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Navbar() {
  const { category, setShowCartProducts, handleSearchProducts, cartProducts } =
    useContext(AppContext);
  const navListItems = ["Home", "About", "Contact", "Services"];
  const [clicked, updateClick] = useState(false);
  const [mobileButton, addMobileButton] = useState(false);
  const navigate = useNavigate();
  const cartProductCount = cartProducts.length;
  const handleBtnClick = () => {
    updateClick((c) => !c);
  };
  const [cartClicked, setCartClicked] = useState(false);
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
              <Link to={`/`} className="nav-items">
                {items}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-search-container">
          <img
            src={cart}
            alt="cart-btn"
            className="cart-btn"
            onClick={() => {
              navigate(cartClicked ? "/cart" : "/");
              setCartClicked((prev) => !prev);
            }}
          />
          {cartProductCount > 0 && (
            <div className="indication">{cartProductCount}</div>
          )}
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
