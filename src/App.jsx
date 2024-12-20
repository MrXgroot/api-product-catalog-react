import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./Components/Categories.jsx";
import "./App.css";
import ProductCard from "./Components/ProductCard.jsx";
import { useEffect, useState } from "react";
import CartCard from "./Components/CartCard.jsx";
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
  const [cartProducts, setCartProducts] = useState([]);
  const [showCartProducts, setShowCartProducts] = useState(false);
  const handleAddToCart = (product) => {
    if (cartProducts.includes(product)) {
      product.quantity++;
      setProducts((prev) => [...prev, product]);
    } else {
      product.quantity = 1;
      setCartProducts((prev) => {
        return [...prev, product];
      });
    }
  };
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
    window.addEventListener("popstate", (e) => {
      if (showCartProducts) setShowCartProducts(false);
    });
    fetchProducts(productIndex)
      .then((products) => {
        setProducts(products);
        setSkeletonScreen(false);
      })
      .catch((e) => {
        window.location.reload();
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
            cartProductCount={cartProducts.length}
            setShowCartProducts={setShowCartProducts}
          />
        </div>

        {showCartProducts ? (
          <div className="cart-display">
            {cartProducts.length > 0 ? (
              cartProducts.map((product, key) => (
                <CartCard
                  product={product}
                  key={key}
                  setProducts={setProducts}
                />
              ))
            ) : (
              <h2>No items in the Cart</h2>
            )}
          </div>
        ) : (
          <>
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
                  <ProductCard
                    Products={product}
                    key={key}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              )}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
