import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearCartItem,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ checkoutItem }) => {
  const { id, name, price, imageUrl, quantity } = checkoutItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));
  const clearItemHandler = () =>
    dispatch(clearCartItem(cartItems, checkoutItem));

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <img src={imageUrl} alt={name} width={200} height={200} />
        </td>
        <td>
          <div>
            <button onClick={addItemHandler}>+</button>
          </div>
          {quantity}
          <div>
            <button onClick={removeItemHandler}>-</button>
          </div>
        </td>
        <td>{price}</td>
        <td onClick={clearItemHandler}>X</td>
      </tr>
    </>
  );
};
export default CheckoutItem;
