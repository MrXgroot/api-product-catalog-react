import "./ProductCard.css";

function ProductCard({ Products }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={Products.images}
          alt="Productimage"
          className="product-image"
        />
        <p className="product-description">{Products.description}</p>
      </div>
      <div className="product-details">
        <h3>{Products.title}</h3>
        <p className="product-price">${Products.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
