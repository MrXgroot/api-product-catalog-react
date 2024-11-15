import "./Categories.css";

function Categories({ CategoryList, changeCategory }) {
  return (
    <div className="category-container">
      {CategoryList.map((category, index) => (
        <div
          className="category-item-card"
          key={index}
          onClick={() => {
            changeCategory(index);
          }}
        >
          <p className="item-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
