import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CartCard from "../Components/CartCard.jsx";
function CartPage() {
  const { cartProducts, setCartProducts } = useContext(AppContext);
  return (
    <div className="cart-display">
      {cartProducts.length > 0 ? (
        cartProducts.map((product, key) => (
          <CartCard
            product={product}
            key={key}
            setCartProducts={setCartProducts}
          />
        ))
      ) : (
        <h2>No items in the Cart</h2>
      )}
    </div>
  );
}

export default CartPage;
