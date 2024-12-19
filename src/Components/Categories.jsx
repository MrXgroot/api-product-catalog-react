import "./Categories.css";

function Categories({ Categories, changeCategory, productIndex }) {
  console.log(productIndex);
  return (
    <div className="category-container">
      {Categories.map((category, index) => (
        <div
          className={`category-item-card ${
            index == productIndex ? `selected` : ``
          }`}
          key={index}
          onClick={() => {
            changeCategory(index);
          }}
        >
          <p className={`item-name ${index == productIndex ? `selected` : ``}`}>
            {category.categoryName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
