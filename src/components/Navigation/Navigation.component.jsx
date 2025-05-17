import { Link } from "react-router";

const Navigation = () => {
  return (
    <>
      Navigation Component
      <div>
        <Link to={"/home"}>Home</Link>
      </div>
      <div>
        <Link to={"/categories"}>Categories</Link>
      </div>
    </>
  );
};
export default Navigation;
