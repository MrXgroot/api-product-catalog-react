import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./Components/Categories.jsx";
import "./App.css";
import ProductCard from "./Components/ProductCard.jsx";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const categories = [
    { categoryName: "Mobiles", endpoint: "/mobiles" },
    { categoryName: "Laptops", endpoint: "/laptops" },
    { categoryName: "Watches", endpoint: "/watches" },
    { categoryName: "Kids Footwear", endpoint: "/kidsfootwear" },
    { categoryName: "Books", endpoint: "/books" },
    { categoryName: "Female Footwear", endpoint: "/femalefootwear" },
    { categoryName: "Male Footwear", endpoint: "/malefootwear" },
    { categoryName: "Kidswear", endpoint: "/kidswear" },
    { categoryName: "Womenswear", endpoint: "/womenswear" },
    { categoryName: "Menswear", endpoint: "/menswear" },
  ];

  const [skeletonScreen, setSkeletonScreen] = useState(true);
  const [productIndex, setProductIndex] = useState(0);

  const handleChangeCategory = (index) => {
    setSkeletonScreen(true);
    setProductIndex(index);
  };
  const fetchProducts = async (productIndex) => {
    const url =
      "https://ecommerce-api3.p.rapidapi.com" +
      categories[productIndex].endpoint;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a9071d683dmsh88aa0dc241dce76p179626jsn400ef8afd317",
        "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts(productIndex).then((products) => {
      console.log(products);
      setProducts(products);
      setSkeletonScreen(false);
    });
  }, [productIndex]);

  //right logic for this part
  const handleSearchProducts = (searchTerm) => {
    fetchProducts(productIndex).then((products) => {
      const filteredProducts = products.filter((product) =>
        product.Brand.toLowerCase().includes(searchTerm)
      );
      if (filteredProducts.length > 0) setProducts(filteredProducts);
    });
  };

  return (
    <div className="container">
      <Router>
        <div className="navbar-container">
          <Navbar
            handleSearchProducts={handleSearchProducts}
            category={categories[productIndex].categoryName}
          />
        </div>

        <Categories
          productIndex={productIndex}
          Categories={categories}
          changeCategory={handleChangeCategory}
        />
        <div className="product-display">
          {skeletonScreen ? (
            <h2>Loading...</h2>
          ) : (
            products.map((product, key) => (
              <ProductCard Products={product} key={key} active={false} />
            ))
          )}
        </div>
        <section className="about"></section>
      </Router>
    </div>
  );
}

export default App;
