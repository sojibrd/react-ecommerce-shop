import { Link, Outlet } from "react-router";
import { SignOutUser } from "../../utils/Firebase/Firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
