import React, { useState } from "react";
import "./CartCard.css";

function CartCard({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  console.log(quantity, product.Price);
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      // setproducts
      setQuantity(value);
    }
  };
  const toInteger = (num) => {
    return parseInt(num.replace(/\D/g, ""), 10);
  };
  // console.log(product);
  return (
    <div className="cart-container">
      <div className="cart-image-container">
        <img src={product.Image} alt={product.name} />
      </div>
      <div className="cart-product-details">
        <div className="brand">{product.Brand}</div>
        <div className="cart-description">{product.Description}</div>

        <div className="price">
          {`₹${toInteger(product.Price) * quantity} `}
          <span>
            {toInteger(product.Price) * quantity +
              Math.ceil(Math.random() * 2000 + 1000)}
          </span>
        </div>
        <div className="quantity">
          <span>Quantity:</span>
          <input
            type="number"
            min="1"
            max="100"
            step="1"
            value={quantity}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
