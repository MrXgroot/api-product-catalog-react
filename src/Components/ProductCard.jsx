import "./ProductCard.css";
import blueCart from "../assets/svg/blueCart.svg";
function ProductCard({ Products, handleAddToCart }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={Products.Image}
          alt="Productimage"
          className="product-image"
        />

        <p className="product-description">{Products.Description}</p>
      </div>
      <div className="product-details">
        <h3>{Products.Brand}</h3>
        <div className="price-cart">
          <p className="product-price">{Products.Price}</p>
          <div className="cart-svg">
            <img
              src={blueCart}
              alt=""
              className="cart-svg"
              onClick={() => handleAddToCart(Products)}
            />
            {Products.quantity && (
              <div className="cart-indication">{Products.quantity}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
