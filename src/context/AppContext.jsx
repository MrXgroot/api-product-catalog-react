import { createContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCartProducts, setShowCartProducts] = useState(false);
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
  const [productIndex, setProductIndex] = useState(0);
  const [category, setCategory] = useState(
    categories[productIndex].categoryName
  );
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

  const handleSearchProducts = (searchTerm) => {
    fetchProducts(productIndex).then((products) => {
      const filteredProducts = products.filter((product) =>
        product.Brand.toLowerCase().includes(searchTerm)
      );
      if (filteredProducts.length > 0) setProducts(filteredProducts);
    });
  };

  const value = {
    cartProducts,
    setCartProducts,
    products,
    setProducts,
    showCartProducts,
    setShowCartProducts,
    handleAddToCart,
    handleSearchProducts,
    setCategory,
    setProductIndex,
    productIndex,
    categories,
    category,
    fetchProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
