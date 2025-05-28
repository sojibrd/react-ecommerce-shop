import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setCartIsOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setCartIsOpen(!isCartOpen);
  return (
    <div
      style={{ position: "relative", marginTop: "10px" }}
      onClick={toggleCart}
    >
      <div
        style={{
          height: "4.5rem",
          fontSize: "1.8rem",
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
