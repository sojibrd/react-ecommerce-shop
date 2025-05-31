import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setCartIsOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  


  const toggleCart = () => dispatch(setCartIsOpen(!isCartOpen));
  return (
    <div
      style={{ position: "relative", marginTop: "10px" }}
      onClick={toggleCart}
    >
      <div
        style={{
          position: "relative",
          width: "2.5rem",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.6rem",
          cursor: "pointer",
          transition: "transform 0.3s",
        }}
      >
        <ShoppingIcon
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "0.3s",
          }}
        />
        <span style={{ bottom: "0.5rem", fontSize: "12px" }}>{cartCount}</span>
      </div>
    </div>
  );
};
export default CartIcon;
