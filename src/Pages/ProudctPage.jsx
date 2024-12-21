import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProductPage() {
  //global states
  const {
    products,
    setProducts,
    handleAddToCart,
    setProductIndex,
    categories,
    productIndex,
  } = useContext(AppContext);
  const [skeletonScreen, setSkeletonScreen] = useState(true);

  const handleChangeCategory = (index) => {
    setSkeletonScreen(true);
    setProductIndex(index);
    // setCatergory(categories[index]);
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
    fetchProducts(productIndex)
      .then((products) => {
        setProducts(products);
        setSkeletonScreen(false);
      })
      .catch((e) => {
        window.location.reload();
      });
  }, [productIndex]);

  return (
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
  );
}

export default ProductPage;
