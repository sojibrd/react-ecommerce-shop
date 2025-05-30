import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/Firebase/Firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => await SignOutUser();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to={"/"}>Logo</Link>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "15px" }}>
            <Link to={"/shop"}>Shop</Link>
          </div>
          <div style={{ padding: "15px" }}>
            {currentUser ? (
              <span onClick={handleSignOut}>Sign Out</span>
            ) : (
              <Link to={"/auth"}>Sign in</Link>
            )}
          </div>
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </div>
  );
};
export default Navigation;
