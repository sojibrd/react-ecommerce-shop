import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  

  const handleAddToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div>
      <div> {name}</div>
      <img src={imageUrl} alt={name} width={200} height={200} />
      <div> {price}</div>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
