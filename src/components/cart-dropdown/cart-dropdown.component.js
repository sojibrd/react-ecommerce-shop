import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

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
