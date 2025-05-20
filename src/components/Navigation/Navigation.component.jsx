import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/Firebase/Firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => await SignOutUser();

  return (
    <>
      Navigation Component
      <div>
        <Link to={"/home"}>Home</Link>
      </div>
      <div>
        <Link to={"/categories"}>Categories</Link>
      </div>
      <div>
        {currentUser ? (
          <span onClick={handleSignOut}>Sign Out</span>
        ) : (
          <Link to={"/auth"}>Sign in</Link>
        )}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
