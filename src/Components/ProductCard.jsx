import "./ProductCard.css";

function ProductCard({ Products }) {
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
        <p className="product-price">{Products.Price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
