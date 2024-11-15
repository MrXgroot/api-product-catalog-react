import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./Components/Categories.jsx";
import "./App.css";
import ProductCard from "./Components/ProductCard.jsx";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skeletonScreen, setSkeletonScreen] = useState(true);
  const [productIndex, setProductIndex] = useState(0);

  const handleChangeCategory = (index) => {
    setProductIndex(index);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        if (categoryData.length > 0) {
          const productResponse = await fetch(categoryData[productIndex].url);
          const productData = await productResponse.json();
          console.log(productData.products);
          setProducts(productData.products);
          setSkeletonScreen(false);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    const fetchProducts = async () => {
      try {
        const response = await fetch(categories[productIndex].url);
        const data = await response.json();
        setProducts(data.products);
        setSkeletonScreen(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, [productIndex]);

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Categories
          CategoryList={categories}
          changeCategory={handleChangeCategory}
        />
        <div className="product-display">
          {skeletonScreen ? (
            <h2>loading....</h2>
          ) : (
            products.map((product, index) => (
              <ProductCard Products={product} key={product.id}></ProductCard>
            ))
          )}
        </div>

        <section className="about"></section>
      </Router>
    </div>
  );
}
export default App;
