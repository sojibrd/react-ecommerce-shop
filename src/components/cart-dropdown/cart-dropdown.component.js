import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        border: "1px solid black",
        position: "absolute",
        right: "15px",
        top: "50px",
      }}
    >
      <div style={{ height: "350px", overflow: "scroll" }}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button type="button" onClick={goToCheckout}>
        Go To Checkout
      </button>
    </div>
  );
};
export default CartDropdown;
