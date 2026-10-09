import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart
} from "./store/cartSlice";

function App() {
  const cartCount = useSelector(
    (state) => state.cart.cartCount
  );

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart());
  };

  const handleRemove = () => {
    dispatch(removeFromCart());
  };

  return (
    <div>
      <h1>Mooway</h1>

      <h2>Cart: {cartCount}</h2>

      <button onClick={handleAdd}>
        Add to Cart
      </button>

      <button onClick={handleRemove}>
        Remove from Cart
      </button>
    </div>
  );
}

export default App;